import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VolunteerPage } from '../volunteer/volunteer';

@Component({
  selector: 'page-create-an-account',
  templateUrl: 'create-an-account.html'
})
export class CreateAnAccountPage {

  constructor(public navCtrl: NavController) {
  }
  goToVolunteer(params){
    if (!params) params = {};
    this.navCtrl.push(VolunteerPage);
  }
}
