import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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
  templateUrl: 'parties.html',
  providers: [
    PartyService,
    UserService
  ]
})
export class PartiesPage {

  parties: Party[];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public alertCtrl: AlertController, private partyService: PartyService, private userService: UserService) {
    let loading = this.loadingCtrl.create({
      content: 'Loading parties...'
    });
    loading.present();

    this.partyService.loadParties().subscribe(
      res => this.parties = res,
      err => console.error('error loading parties: ' + err),
      () => loading.dismissAll()
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartiesPage');
  }

  goToParty(party: Party) {
    this.navCtrl.push('party-page', {partyId: party.id});
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

}
