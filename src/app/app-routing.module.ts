import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
   { path: 'list',  component: TodolistComponent,canActivate: [GuardService] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: '',   redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
