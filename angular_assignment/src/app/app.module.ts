import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayComponent } from './Data binding/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { NgForComponent } from './Directives/structural Directive/ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
