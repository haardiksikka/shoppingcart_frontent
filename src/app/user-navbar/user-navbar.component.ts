import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login'])
  }
}
