import {Component, NgModule, OnInit} from '@angular/core';
import {IonicPageModule, NavController} from 'ionic-angular';
import {PartiesPage} from './parties';
import {PartyPage} from '../party/party';

@NgModule({
  declarations: [
    PartiesPage,
  ],
  imports: [
    IonicPageModule.forChild(PartiesPage),
  ],
  exports: [
    PartiesPage
  ]
})
@Component({
  templateUrl: 'parties.html'
})
export class PartiesPageModule implements OnInit {

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }

  public goToParty(partyId: string) {
    this.navCtrl.push(PartyPage);
  }
}
