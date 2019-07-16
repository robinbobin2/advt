import { ApiService } from './../shared/api.service';
import { AddFieldComponent } from "./../components/add-field/add-field.component";
import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { OverlayEventDetail } from "@ionic/core";
import { Field } from "../shared/field.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  fields: Field[] = [];
  query: any;
  api_result: any;
  hasFields = true;
  groupData: any;
  constructor(public modalController: ModalController, private route: ActivatedRoute, private api: ApiService) {
    this.route.queryParams.subscribe(params => {
      this.query = params;
      this.api_result = JSON.parse(params['api_result']);
      console.log(encodeURI(JSON.stringify(params)));
      // this.api.getGroupInfo(params).subscribe(
      //   res => {
      //     console.log(res);
      //   }
      // );
      this.groupData = JSON.parse(this.api.getGroupInfo(params));
      console.log(this.groupData)
      this.fields = this.groupData.fields;
      if(this.groupData.fields.length > 0) {
        this.hasFields = true;
      }
  });
  }
  async addField() {
    const modal = await this.modalController.create({
      component: AddFieldComponent
    });
    modal.onWillDismiss().then((detail: OverlayEventDetail) => {
      console.log(detail.data);
      this.fields.push(detail.data);
    });
    return await modal.present();
  }
}
