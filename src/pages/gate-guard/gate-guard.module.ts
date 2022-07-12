import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GateGuardPage } from './gate-guard';

@NgModule({
  declarations: [
    GateGuardPage,
  ],
  imports: [
    IonicPageModule.forChild(GateGuardPage),
  ],
})
export class GateGuardPageModule {}
