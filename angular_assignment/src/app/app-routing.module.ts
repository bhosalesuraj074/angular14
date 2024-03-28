import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Routing/home/home.component';
import { ShoppingComponent } from './Routing/shopping/shopping.component';
import { MenComponent } from './Routing/men/men.component';
import { WomenComponent } from './Routing/women/women.component';
import { LoginComponent } from './Routing/login/login.component';
import { AuthGuard } from './Routing/services/auth.guard';

const routes: Routes = [
  {path: '' , redirectTo:'shopping', pathMatch:'full'},
  {path :'shopping', component: ShoppingComponent, children: [
    {path:'home',canActivate: [AuthGuard], component:HomeComponent},
    {path:'men',canActivate: [AuthGuard], component: MenComponent},
    {path:'women',canActivate: [AuthGuard], component: WomenComponent},
    {path:'login',  component: LoginComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
