import { ApiService } from './../shared/api.service';
import { AddFieldComponent } from './../components/add-field/add-field.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Field } from '../shared/field.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  fields: Field[] = [];
  query: any;
  api_result: any;
  hasFields = true;
  groupData: any;
  VK = {} as any;
  constructor(
    public modalController: ModalController,
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this.VK.init(()=> {
      this.VK.callMethod("resizeWindow", document.getElementById('root').clientWidth, document.getElementById('root').clientHeight);
      this.VK.callMethod("setTitle", "Приложение для постинга объявлений");

// console.log(api_result);
}, ()=> {
  // document.getElementById('res').innerHTML = 'Fail';
}, '5.101');
    this.route.queryParams.subscribe(params => {
      this.query = params;
      this.api_result = JSON.parse(params.api_result);
      console.log(params);
      this.api.getGroupInfo(params).subscribe(res => {
        this.groupData = res;
        console.log(this.groupData);
        this.fields = this.groupData.fields;
        console.log(this.fields[0].id);
        if (this.groupData.fields.length > 0) {
        this.hasFields = true;
      }
      });

    });
  }
  publishPost() {
    this.VK.api('wall.post', {message: 'asd',signed: 1,owner_id: '-' + this.query.group_id, v: '5.92'}, function(data) {
            document.getElementById('results').innerHTML = `<div class="alert alert-success col-sm-12" role="alert">
            Объявление отправлено в "Предложенные новости" сообщества.</div>`;
            this.VK.callMethod('resizeWindow', document.getElementById('root').clientWidth, document.getElementById('root').clientHeight);
    });
  }
  async addField() {
    const modal = await this.modalController.create({
      component: AddFieldComponent
    });
    modal.onWillDismiss().then((detail: OverlayEventDetail) => {
      console.log(detail.data);
      console.log(this.query.group_id);
      console.log('this.query.group_id');
      this.fields.push(detail.data);
      this.api.createField(this.query.group_id, detail.data).subscribe(
        res => {
          console.log(res);
        }
      );
    });
    return await modal.present();
  }
}
