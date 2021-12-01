import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtractionsPage } from './atractions.page';

const routes: Routes = [
  {
    path: '',
    component: AtractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtractionsPageRoutingModule {}
