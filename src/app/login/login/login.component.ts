import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    login: new FormControl(''),
    pass: new FormControl(''),
  });

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const validPassport = {login: 'login', pass: 'login'};

    if (this.loginForm.value === validPassport) {
      this.loginService.login();
    }

  }

}
