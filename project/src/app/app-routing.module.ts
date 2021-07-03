import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestroComponent} from "./add-restro/add-restro.component";
import {ListRestroComponent} from "./list-restro/list-restro.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UpdateRestroComponent} from "./update-restro/update-restro.component";



const routes: Routes = [
  // {
  //   path:'list-restro',
  //   component:ListRestroComponent,
  // },
  {
  path:'add',
  component:AddRestroComponent,
  },
  {
  path:'update/:id',
  component:UpdateRestroComponent,
  },
  {
  path:'login',
  component:LoginComponent,
  },
  {
  path:'register',
  component:RegisterComponent,
  },

  {

  path:'',
  component:ListRestroComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
