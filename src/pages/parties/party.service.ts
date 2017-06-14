import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishReplay';
import {Party} from '../../model/data';
import {LoadingController} from 'ionic-angular';

@Injectable()
export class PartyService {

  private partiesObservable: Observable<any>;
  private parties: Party[];

  constructor(private http: Http, public loadingCtrl: LoadingController) {
    this.http = http;
  }

  loadParties() {
    if (this.partiesObservable) {
      // request is in progress -> return it for the ongoing request
      return this.partiesObservable;
    } else {
      // create the request and store the observable for subsequent subscribers
      this.partiesObservable = this.http.get('assets/mock/parties.json')
        .map(res => {
          // when the cached data is available we don't need the observable reference anymore
          this.partiesObservable = undefined;
          return res.json().parties;
        })
        .share(); // make it shared so more than one subscriber can get the result
      return this.partiesObservable;
    }
  }

  getParties() {
    if (this.parties) {
      // request already done -> return data as observable
      return Observable.of(this.parties);
    } else {
      let loading = this.loadingCtrl.create({
        content: 'Loading parties...'
      });
      loading.present();

      this.loadParties().subscribe(
        res => this.parties = res,
        err => console.error('error loading parties: ' + err),
        () => loading.dismissAll()
      );
      return this.partiesObservable;
    }
  }

  isUserGoingToParty(party: Party, user: string): boolean {
    return party.guests.indexOf(user) > -1
  }
}
