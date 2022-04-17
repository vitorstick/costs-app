import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsContainerComponent } from './containers';
import { CostResolver, RateResolver } from './services';

const routes: Routes = [
  {
    path: '',
    component: CostsContainerComponent,
    resolve: {
      costs: CostResolver,
      exchangeRates: RateResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
