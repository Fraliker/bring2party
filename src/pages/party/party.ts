import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
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

  constructor(public navParams: NavParams, public partyService: PartyService) {
    this.partyService.getParties().subscribe(
      res => this.party = res.find(party => party.id === this.navParams.get('partyId')));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartyPage');
  }

}
