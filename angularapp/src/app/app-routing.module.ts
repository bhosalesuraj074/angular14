import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { HomeComponent } from './Routing/home/home.component';
import { PagenotfoundComponent } from './Routing/pagenotfound/pagenotfound.component';
import { MobileComponent } from './Routing/Product Routing/mobile/mobile.component';
import { ProductsComponent } from './Routing/Product Routing/products/products.component';
import { LoginComponent } from './Routing/Product Routing/login/login.component';
import { PostlistComponent } from './Routing/Posts (route paramter)/postlist/postlist.component';
import { PostdetailsComponent } from './Routing/Posts (route paramter)/postdetails/postdetails.component';
import { AuthGuard } from './AuthGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo : 'login', pathMatch:'full'} ,// http://localhost:4200/
  {path :'login', component:LoginComponent},
  {path: 'home', canActivate:[AuthGuard],  component : HomeComponent},
  { path: 'about' , component: AboutComponent} , // http://localhost:4200/about
  { path: 'contact', component: ContactComponent},// http://localhost:4200/contact
  { path: 'products',  component: ProductsComponent, children: [
    {path: 'mobile', component: MobileComponent},
  ]},
  { path: 'postlist', component: PostlistComponent},
  { path: 'postDetails/:id', component: PostdetailsComponent},
  { path: '**', component: PagenotfoundComponent} 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
