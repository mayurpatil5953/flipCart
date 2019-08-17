import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { ProductsComponent} from './products/products.component';
const routes: Routes = [
{ path:'', component : HomeComponent },
{ path:'login', component : LoginComponent },
{ path:'signup', component : SignupComponent },
{ path:'products', component : ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
