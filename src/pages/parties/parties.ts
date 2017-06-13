import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
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

  userJoined: boolean;
  usersGoing: string[];
  currentUser: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // TODO: load data from service
    this.userJoined = false;
    this.usersGoing = ['John', 'Brigitte', 'Urs', 'Susi'];
    this.currentUser = 'Marco';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartiesPage');
  }

  goToParty(partyId: string) {
    this.navCtrl.push(PartyPage);
  }

  showPartyPeople(partyId: string) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Party people');
    if (!this.userJoined) {
      alert.setMessage(this.currentUser + ', are you also going to the party?');
      alert.addInput({
        type: 'checkbox',
        label: this.currentUser,
        value: this.currentUser,
        checked: false
      });
    }
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.usersGoing = data;
        this.userJoined = data.indexOf(this.currentUser) > -1;
      }
    });
    for (let user of this.usersGoing) {
      alert.addInput({
        type: 'checkbox',
        label: user,
        value: user,
        checked: true,
        disabled: user !== this.currentUser
      });
    }
    alert.present();
  }

}
