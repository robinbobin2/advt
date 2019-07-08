import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss'],
})
export class AddFieldComponent implements OnInit {
  label: string;
  type: string;
  required: number;
  toggleReq: boolean;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  saveDismiss() {
    if(this.toggleReq == true) {
      this.required = 1;
    } else {
      this.required = 0;

    }
    let data = { 'required': this.required, 'type': this.type, 'label': this.label };
    this.modalCtrl.dismiss(data);
    
  }

}
