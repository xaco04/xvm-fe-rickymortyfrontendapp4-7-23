import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 

import { HomeComponent } from './home/home.component' 
import { RegisterComponent } from './register/register.component'; 
import { LoginComponent } from './login/login.component';
import { ListapersComponent } from './home/listapers/listapers.component';
import { AboutComponent } from './home/about/about.component';
import { DetailsComponent } from './home/details/details.component';
import { AddComponent } from './home/add/add.component';
import { ListComponent } from './home/list/list.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige la ruta raíz a '/home' 
  { 
    path:'home', 
    component: HomeComponent 
  }, 
  { 
    path:'register', 
    component: RegisterComponent 
  }, 
  { 
    path:'login', 
    component: LoginComponent 
  },
  {
    path:'listapers',
    component: ListapersComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'add',
    component: AddComponent
  },
  {
    path:'list',
    component: ListComponent
  }



]; 
@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
}) 
export class AppRoutingModule { } 