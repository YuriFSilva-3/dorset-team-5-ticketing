import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AtractionsPageRoutingModule } from './atractions-routing.module';

import { AtractionsPage } from './atractions.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtractionsPageRoutingModule
  ],
  declarations: [AtractionsPage]
})
export class AtractionsPageModule {}
