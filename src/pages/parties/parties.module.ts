import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PartiesPage} from './parties';

@NgModule({
  declarations: [
    PartiesPage
  ],
  imports: [
    IonicPageModule.forChild(PartiesPage)
  ],
  exports: [
    PartiesPage
  ],
  entryComponents: [
    PartiesPage
  ]
})
export class PartiesPageModule {
}
