import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayComponent } from './Data binding/two-way/two-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForComponent } from './Directives/structural Directive/ng-for/ng-for.component';
import { StateVillageComponent } from './state_assignment/state-village/state-village.component';
import { PassGenratorComponent } from './Password Generator/pass-genrator/pass-genrator.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    NgForComponent,
    StateVillageComponent,
    PassGenratorComponent,
    AgeCalculatorComponent,
    UserFormComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    MatSliderModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule
   
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
