import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss'],
})
export class EditFieldComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() required: number;
  toggleReq: boolean;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    if(this.required == 1) {
      this.toggleReq = true;
    } else {
      this.toggleReq = false;

    }
    console.log(this.label)
  }
  onDismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  toggle() {
    if(this.toggleReq == true) {
      this.required = 1;
    } else {
      this.required = 0;

    }
    console.log(this.required)
    console.log(this.toggleReq)

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
