import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { TodotaskDeleteComponent } from './todotasks/todotask-delete/todotask-delete.component';
import { TodotaskDetailComponent } from './todotasks/todotask-detail/todotask-detail.component';
import { TodotaskEditComponent } from './todotasks/todotask-edit/todotask-edit.component';
import { TodotasksComponent } from './todotasks/todotasks.component';

const routes: Routes = [
  { path: 'todotasks', component: TodotasksComponent, canActivate: [AuthGuardGuard]},
  { path: 'todotasks/:id', component: TodotaskDetailComponent, canActivate: [AuthGuardGuard] },
  { path: 'todotasks/edit/:id', component: TodotaskEditComponent, canActivate: [AuthGuardGuard] },
  { path: 'todotasks/delete/:id', component: TodotaskDeleteComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/todotasks', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }