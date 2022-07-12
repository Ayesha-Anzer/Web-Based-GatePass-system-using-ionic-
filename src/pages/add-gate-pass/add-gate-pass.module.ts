import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddGatePassPage } from './add-gate-pass';

@NgModule({
  declarations: [
    AddGatePassPage,
  ],
  imports: [
    IonicPageModule.forChild(AddGatePassPage),
  ],
})
export class AddGatePassPageModule {}
