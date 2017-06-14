import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PartyService} from '../parties/party.service';
import {Party} from '../../model/data';

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
  providers: [
    PartyService
  ]
})
export class PartyPage {

  section: string = 'details';
  party: Party;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public partyService: PartyService) {
    let loading = this.loadingCtrl.create({
      content: 'Loading parties...'
    });
    loading.present();

    this.partyService.loadParties().subscribe(
      res => this.party = res.find(party => party.id === this.navParams.get('partyId')),
      err => console.error('error loading parties: ' + err),
      () => loading.dismissAll()
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartyPage');
  }

}
