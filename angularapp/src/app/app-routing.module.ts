import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { HomeComponent } from './Routing/home/home.component';
import { PagenotfoundComponent } from './Routing/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent} ,// http://localhost:4200/
  { path: 'about' , component: AboutComponent} , // http://localhost:4200/about
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PagenotfoundComponent} // http://localhost:4200/contact
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
