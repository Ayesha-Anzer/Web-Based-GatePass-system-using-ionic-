import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { LoginPage} from "../../pages/login/login";
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {GateGuardPage} from "../gate-guard/gate-guard";

@IonicPage()
@Component({
  selector: 'page-add-gate-pass',
  templateUrl: 'add-gate-pass.html',
})
export class AddGatePassPage {

  firstName:string;
  lastName:string;
  id:string;
  nationality:string;
  company:string;
  purpose:string;
  approver:string;
  date:number;
  timeIn:string;
  timeOut:string;
  building:string;
  section:string;
  floor:string;


  uid:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afDB: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {


    afAuth.authState.subscribe(user => {
      if (!user) {
        this.uid = null;
        this.showAlert("Error","User Not Logged In");
        this.navCtrl.push(LoginPage);
        return;
      }
      this.uid = user.uid;
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGatePassPage');

  }

  addGatePass()
  {
    let myGatePass = {

      firstName:this.firstName,
    lastName:this.lastName,
    id:this.id,
    nationality:this.nationality,
    company:this.company,
    purpose:this.purpose,
    approver:this.approver,
    date:this.date,
    timeIn:this.timeIn,
    timeOut:this.timeOut,
    building:this.building,
    section:this.section,
    floor:this.floor,
      loginID:this.uid

    };

    let list  = this.afDB.list("passes");
    list.push(myGatePass);
    this.navCtrl.push(HomePage, GateGuardPage);
  }
  showAlert(mTitle:string,sTitle:string) {
    let alert = this.alertCtrl.create({
      title: mTitle,
      subTitle: sTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
