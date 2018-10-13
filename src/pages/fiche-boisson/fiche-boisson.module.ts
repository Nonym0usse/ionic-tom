import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheBoissonPage } from './fiche-boisson';

@NgModule({
  declarations: [
    FicheBoissonPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheBoissonPage),
  ],
})
export class FicheBoissonPageModule {}
