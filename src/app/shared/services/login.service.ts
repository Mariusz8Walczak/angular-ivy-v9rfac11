import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userIsLogged: boolean;

  constructor() {
  }

  public isLogged(): boolean {
    return this.userIsLogged;
  }

  public login(): void {
    if (!this.userIsLogged) {
      this.userIsLogged = true;
    }
  }

  public logout(): void{
    if (this.userIsLogged) {
      this.userIsLogged = false;
    }
  }

}
