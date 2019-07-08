import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  @Input() type: string;
  @Input() required: number;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
    console.log(this.type)
  }

}
