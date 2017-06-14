import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishReplay';
import {Party} from '../../model/data';

@Injectable()
export class PartyService {

  private partiesObservable: Observable<any>;

  constructor(private http: Http) {
    this.http = http;
  }

  loadParties() {
    if (!this.partiesObservable) {
      this.partiesObservable = this.http.get('assets/mock/parties.json')
        .map(res => res.json().parties)
        // .do(parties => console.log(parties.length + ' parties loaded'))
        .publishReplay(1)
        .refCount();
    }
    return this.partiesObservable;
  }

  isUserGoingToParty(party: Party, user: string): boolean {
    return party.guests.indexOf(user) > -1
  }
}
