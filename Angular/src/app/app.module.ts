import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { AuthenticateGuard} from "./authenticate.guard";
import { UserService} from "./user.service";
import { AuthService} from "./auth.service";
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthenticateGuard]
      },
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthenticateGuard]
      },
      {
        path: '',
        component: HomeComponent
      }
      ])
  ],
  providers: [AuthenticateGuard,AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
