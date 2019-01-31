import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

interface mydata {
  success:boolean,
  message:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoggedInStatus = false;

  constructor(private http:HttpClient) { }

  get isLoggedIn()
  {
    return this.LoggedInStatus;
  }
  getUserDetails(username,password)
  {
    return this.http.post<mydata>("/api/auth.php",{
      username,password
    })
  }
  setLoggedIn(b: boolean)
  {
    this.LoggedInStatus = b;
  }
}
