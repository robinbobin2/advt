import { AddFieldComponent } from './../components/add-field/add-field.component';
import { FieldAdminComponent } from './../components/field-admin/field-admin.component';
import { FieldComponent } from './../components/field/field.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers: [AddFieldComponent],
  declarations: [FieldComponent, HomePage, FieldAdminComponent, AddFieldComponent],
  exports: [FieldComponent, FieldAdminComponent, AddFieldComponent],
  entryComponents: [AddFieldComponent]
})
export class HomePageModule {}
