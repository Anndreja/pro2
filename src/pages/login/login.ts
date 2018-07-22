import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  message = "";
  data = {
    username: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private Auth: AuthProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: 'Neuspešna prijava!',
      subTitle: msg+' Pokušajte ponovo!',
      buttons: ['OK']
    });
    alert.present();
  }
  login(form) {
    
    this.navCtrl.push(TabsPage);
    if (!!form.valid) {
      this.Auth.getUserDetails(form.value.username, form.value.password).subscribe(data => {
        if (!!data.status) {
          this.Auth.setLoggedIn(true);
          this.Auth.setUser(data);
          this.navCtrl.push(TabsPage);
        } else {
          this.Auth.setLoggedIn(false);
          this.showAlert(data.message);
        }
      });
    } else {
      this.showAlert("Prosimo izpolnite formo!");
    }
  }
}
