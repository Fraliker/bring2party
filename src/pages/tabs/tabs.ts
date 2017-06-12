import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PartiesPage } from '../parties/parties';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PartiesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
