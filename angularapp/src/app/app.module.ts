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
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { MatCardModule } from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import { PipeExampleComponent } from './Pipes/pipe-example/pipe-example.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { FilterpipeComponent } from './Pipes/filterpipe/filterpipe.component';
import { Comp1Component } from './Subjet and behaviour observable/comp1/comp1.component';
import { Comp2Component } from './Subjet and behaviour observable/comp2/comp2.component';
import { Comp3Component } from './Subjet and behaviour observable/comp3/comp3.component';
import { Comp4Component } from './Subjet and behaviour observable/comp4/comp4.component';
import { HomeComponent } from './Routing/home/home.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './Routing/Product Routing/products/products.component';
import { MobileComponent } from './Routing/Product Routing/mobile/mobile.component';
import { LoginComponent } from './Routing/Product Routing/login/login.component';
import { PostlistComponent } from './Routing/Posts (route paramter)/postlist/postlist.component';
import { PostdetailsComponent } from './Routing/Posts (route paramter)/postdetails/postdetails.component';

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
    ReactiveFormsComponent,
    RapidapiComponent,
    PipeExampleComponent,
    FilterPipe,
    FilterpipeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    HomeComponent,
    ProductsComponent,
    MobileComponent,
    LoginComponent,
    PostlistComponent,
    PostdetailsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
