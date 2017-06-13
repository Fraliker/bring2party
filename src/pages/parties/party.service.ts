import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import Party = bring2party.data.Party;

@Injectable()
export class PartyService {

  parties: Party[];

  constructor(private http: Http) {
    this.http = http;
  }

  getParties() {
    return this.parties;
  }

  loadParties(): Observable<Party[]> {
    return this.http.get('assets/mock/parties.json')
      .map(res => {
        this.parties = res.json().parties;
        return this.parties;
      });
  }

  isUserGoingToParty(party: Party, user: string) {
    return party.guests.indexOf(user) > -1
  }
}
