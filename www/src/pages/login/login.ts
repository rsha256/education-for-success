import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VolunteerPage } from '../volunteer/volunteer';
import { CreateAnAccountPage } from '../create-an-account/create-an-account';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToVolunteer(params){
    if (!params) params = {};
    this.navCtrl.push(VolunteerPage);
  }goToCreateAnAccount(params){
    if (!params) params = {};
    this.navCtrl.push(CreateAnAccountPage);
  }
}
