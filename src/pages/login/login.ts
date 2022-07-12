import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { HomePage} from "../home/home";
import {GateGuardPage} from "../gate-guard/gate-guard";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  password:string;
  email:string;
  errorMessage:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {

    this.errorMessage = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn() {
    var e1 = "gateadmin@adu.ac.ae";
    var e2 = "gateguard@adu.ac.ae";
    var p1 =  "123456";
    if (this.email == e1 && this.password == p1) {
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(" user " + user.uid);
          this.navCtrl.push(HomePage);
        }).catch((error) => {
        this.showAlert("Error", error.message);
        this.errorMessage = "Error: " + error.message;
      });
    }

    if (this.email == e2 && this.password == p1) {

      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(" user " + user.uid);
          this.navCtrl.push(GateGuardPage);


        }).catch((error) => {
        this.showAlert("Error", error.message);
        this.errorMessage = "Error: " + error.message;
      });

    }

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

