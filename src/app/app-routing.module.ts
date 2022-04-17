import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsContainerComponent } from './containers';
import { CostResolver } from './services';

const routes: Routes = [
  {
    path: '',
    component: CostsContainerComponent,
    resolve: {
      costs: CostResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
