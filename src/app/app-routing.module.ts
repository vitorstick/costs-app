import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsContainerComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: CostsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
