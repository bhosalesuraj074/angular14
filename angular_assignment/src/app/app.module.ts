import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayComponent } from './Data binding/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { NgForComponent } from './Directives/structural Directive/ng-for/ng-for.component';
import { StateVillageComponent } from './state_assignment/state-village/state-village.component';
import { PassGenratorComponent } from './Password Generator/pass-genrator/pass-genrator.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    NgForComponent,
    StateVillageComponent,
    PassGenratorComponent,
    AgeCalculatorComponent
    
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
