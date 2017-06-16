import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {PartyService} from './party.service';
import {UserService} from '../../model/user.service';
import {Party} from '../../model/data';

/**
 * Generated class for the PartiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'parties-page'
})
@Component({
  selector: 'page-parties',
  templateUrl: 'parties.html'
})
export class PartiesPage {

  parties: Party[];

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private partyService: PartyService, private userService: UserService) {
    this.partyService.getParties().subscribe(res => this.parties = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartiesPage');
  }

  goToParty(party: Party) {
    if (!party) {
      this.navCtrl.push('party-page');
    } else {
      this.navCtrl.push('party-page', {partyId: party.id});
    }
  }

  isCurrentUserGoingToParty(party: Party) {
    return this.partyService.isUserGoingToParty(party, this.userService.getCurrentUser());
  }

  showPartyPeople(party: Party) {
    let currentUser = this.userService.getCurrentUser();
    let alert = this.alertCtrl.create();
    alert.setTitle('Party people');
    if (!this.isCurrentUserGoingToParty(party)) {
      alert.setMessage(currentUser + ', are you also going to the party?');
      alert.addInput({
        type: 'checkbox',
        label: currentUser,
        value: currentUser,
        checked: false
      });
    }
    alert.addButton({
      text: 'Ok',
      handler: data => {
        party.guests = data;
      }
    });
    for (let guest of party.guests) {
      alert.addInput({
        type: 'checkbox',
        label: guest,
        value: guest,
        checked: true,
        disabled: guest !== currentUser
      });
    }
    alert.present();
  }

  getMailToLink(party: Party): string {
    let link = `mailto:?to=&subject=${party.title}&body=${party.description}\n\nhttp://localhost:8100/#/parties/${party.id}`;
    return encodeURI(link);
  }

}
