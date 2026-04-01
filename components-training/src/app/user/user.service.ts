import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean{
    return !!this.user;
  }
  
  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = null;
    }
  }
  login(){
    this.user = {
      firstName: 'Svetlin',
      email: 'svetlin@abv.bg',
      phoneNumber: '123123123',
      password: 'asdasd',
      id: '123123'
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout(){
    this.user = null;
    localStorage.removeItem(this.USER_KEY)
  }

  


}
