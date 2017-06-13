import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PartyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'party-page',
  segment: 'party/:partyId',
  defaultHistory: ['parties-page']
})
@Component({
  selector: 'page-party',
  templateUrl: 'party.html',
})
export class PartyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartyPage');
    console.log(this.navParams.get('partyId'));
  }

}
