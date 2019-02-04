import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from "./auth.service";
import {UserService} from "./user.service";
import { map } from "rxjs/operators"
import {P} from "@angular/core/src/render3";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(private Auth:AuthService, private user:UserService, private route:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.Auth.isLoggedIn)
    {
      return true;
    }
    return this.user.isLoggedIn().pipe(map(res => {
        if(res.status)
        {
          this.Auth.setLoggedIn(true);
          return true;
        }
        else
        {
          this.route.navigate(['login']);
          return false;
        }
    }));
  }
}
