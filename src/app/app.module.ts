import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodotasksComponent } from './todotasks/todotasks.component';
import { TodotaskDetailComponent } from './todotasks/todotask-detail/todotask-detail.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { TestPipePipe } from './test-pipe.pipe';
import { JwtModule } from '@auth0/angular-jwt';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodotaskEditComponent } from './todotasks/todotask-edit/todotask-edit.component';
import { TodotaskDeleteComponent } from './todotasks/todotask-delete/todotask-delete.component';
import { TodotaskAddComponent } from './todotasks/todotask-add/todotask-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodotasksComponent,
    TodotaskDetailComponent,
    LoginComponent,
    RegisterComponent,
    TestDirectiveDirective,
    TestPipePipe,
    TodotaskEditComponent,
    TodotaskDeleteComponent,
    TodotaskAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    }),
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
