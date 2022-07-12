import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage} from "../../pages/login/login";
import {AddGatePassPage} from "../add-gate-pass/add-gate-pass";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  uid:string;
  displayName:string;
  items: Observable<any[]>;
  passes:any[];


  constructor(public navCtrl: NavController,
              afDB: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {

    afAuth.authState.subscribe(user => {
      if (!user) {
        this.uid = null;
        this.showAlert("Error","User Not Logged In");
        this.navCtrl.push(LoginPage);
        return;
      }
      this.displayName = user.displayName;
      this.uid = user.uid;
    });


    this.items = afDB.list('passes').valueChanges();
    this.items.subscribe((data)=>{
      console.log(""+ data);
      this.passes = data;
      let listofkeys = [];
      let listofobjects = [];
      for (let i = 0; i < this.passes.length; i++)
      {
        listofkeys = Object.keys(this.passes[i].locations);
        for (let j = 0 ; j < listofkeys.length; j++)
        {
          let mObject = this.passes[i].locations[listofkeys[j]];
          listofobjects.push(mObject);

        }
        this.passes[i].locations = listofobjects;
        listofobjects = [];
      }

    });


  }

  showAlert(mTitle:string,sTitle:string) {
    let alert = this.alertCtrl.create({
      title: mTitle,
      subTitle: sTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  addGatePage(){
    this.navCtrl.push(AddGatePassPage);
  }

}

