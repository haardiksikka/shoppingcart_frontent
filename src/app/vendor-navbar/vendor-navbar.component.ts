import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-navbar',
  templateUrl: './vendor-navbar.component.html',
  styleUrls: ['./vendor-navbar.component.css']
})
export class VendorNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
