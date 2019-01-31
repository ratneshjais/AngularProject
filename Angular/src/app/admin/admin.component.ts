import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message = 'Loading...........'
  //   message='';
  constructor(private user:UserService) { }

  ngOnInit() {
    this.user.getData().subscribe(data => {
      this.message = data.message
    });
  }

}
