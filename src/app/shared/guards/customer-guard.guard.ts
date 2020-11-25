import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardGuard implements CanActivate {

  constructor(private loginService: LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    console.log(this.loginService.isLogged());
    if (this.loginService.isLogged()) {
      return true;
    } else {
      return false;
    }
  }

}
