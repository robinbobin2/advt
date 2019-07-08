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
  constructor(public modalController: ModalController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.query = params;
      this.api_result = JSON.parse(params['api_result'])
      console.log(this.api_result);
      console.log(this.query);
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
