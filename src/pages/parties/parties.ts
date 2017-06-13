import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PartyPage} from '../party/party';

/**
 * Generated class for the PartiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-parties',
  templateUrl: 'parties.html',
})
export class PartiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartiesPage');
  }

  goToParty(partyId: string) {
    this.navCtrl.push(PartyPage);
  }

}
