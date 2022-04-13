import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostElementComponent, CostTableComponent } from './components';
import { CostsContainerComponent } from './containers';
import { CostItemComponent } from './components/cost-item/cost-item.component';
import { CostCommentComponent } from './components/cost-comment/cost-comment.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CostsContainerComponent,
    CostElementComponent,
    CostTableComponent,
    CostItemComponent,
    CostCommentComponent,
    NewCommentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
