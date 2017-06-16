import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {PartyService} from '../parties/party.service';
import {Party} from '../../model/data';
import {UserService} from '../../model/user.service';

declare let google: any;

@IonicPage({
  name: 'party-page',
  segment: 'party/:partyId',
  defaultHistory: ['parties-page']
})
@Component({
  selector: 'page-party',
  templateUrl: 'party.html'
})
export class PartyPage {

  section: string = 'details';
  party: Party;

  addressSuggestions: string[] = [];
  addressService = new google.maps.places.AutocompleteService();

  constructor(private navParams: NavParams, private partyService: PartyService, private userService: UserService) {
    let partyId = this.navParams.get('partyId');
    if (partyId) {
      this.partyService.getParty(partyId).subscribe(
        res => this.party = res
      );
    } else {
      this.party = {
        id: undefined,
        title: undefined,
        description: undefined,
        location: undefined,
        date: new Date(),
        organizer: this.userService.getCurrentUser(),
        items: [],
        guests: [this.userService.getCurrentUser()]
      };
    }
  }

  showAddressSuggestions(addressSearch) {
    if (!addressSearch) {
      this.addressSuggestions = [];
      return;
    }
    let me = this;
    this.addressService.getPlacePredictions({input: addressSearch}, function (suggestions) {
      me.addressSuggestions = [];
      if (suggestions) {
        suggestions.forEach(function (suggestion) {
          me.addressSuggestions.push(suggestion.description);
        });
      }
    });
  }

  pickAddress(address) {
    this.party.location = address;
    this.addressSuggestions = [];
  }

  saveParty() {
    this.partyService.saveParty(this.party);
  }
}
