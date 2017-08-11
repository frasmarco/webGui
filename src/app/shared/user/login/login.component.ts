import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'sa-login',
  templateUrl : './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
}
