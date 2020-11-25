import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.loginService.logout();
  }

}


