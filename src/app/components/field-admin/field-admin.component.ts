import { ApiService } from './../../shared/api.service';
import { AddFieldComponent } from './../add-field/add-field.component';
import { EditFieldComponent } from "./../edit-field/edit-field.component";
import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { OverlayEventDetail } from "@ionic/core";
import { Field } from 'src/app/shared/field.model';

@Component({
  selector: "app-field-admin",
  templateUrl: "./field-admin.component.html",
  styleUrls: ["./field-admin.component.scss"]
})
export class FieldAdminComponent implements OnInit {
  @Input() type: string;
  @Input() required: number;
  @Input() label: string;
  @Input() id: number;
  constructor(public modalController: ModalController, public api: ApiService) {
    console.log(this.id);
  }
  async editField() {
    const modal = await this.modalController.create({
      component: EditFieldComponent,
      componentProps: {
        type: this.type,
        required: this.required,
        label: this.label,
        
      }
    });
    modal.onWillDismiss().then((detail: OverlayEventDetail) => {
      console.log(detail.data);
      this.type = detail.data.type;
      this.required = detail.data.required;
      this.label = detail.data.label;
      console.log(this.id);
      this.api.editField(this.id, detail.data).subscribe(
        res=> {
          console.log(res);
        }
      );
    });
    return await modal.present();
  }
  

  ngOnInit() {}
}
