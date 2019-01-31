import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

interface mydata
{
  success: boolean
  message: string
}

interface islogin {
  status:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get<mydata>("/api/database.php")
  }

  isLoggedIn() : Observable<islogin>
  {
    return this.http.get<islogin>('/api/isloggedin.php')
  }
}
