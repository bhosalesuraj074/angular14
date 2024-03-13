import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgifComponent } from './Directive/structural/ngif/ngif.component';
import { ParentComponent } from './Property Decorator/parent/parent.component';
import { ChildComponent } from './Property Decorator/child/child.component';
import { NgforComponent } from './Directive/structural/ngfor/ngfor.component';
import { NgSwitchComponent } from './Directive/structural/ng-switch/ng-switch.component';
import { AttributeComponent } from './Directive/attribute/attribute.component';
import { NgClassComponent } from './Directive/attribute/ng-class/ng-class.component';
import { CustomDirective } from './Directive/custom.directive';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent, 
    TestComponent, 
    DatabindingComponent,
    NgifComponent,
    ParentComponent,
    ChildComponent,
    NgforComponent,
    NgSwitchComponent,
    AttributeComponent,
    NgClassComponent,
    CustomDirective,
    TemplateFormComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
