import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { EmailDirective } from "../../directives/email.directive";
import { DOMAINS } from '../../constants';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  domains = DOMAINS;

  constructor(private userService: UserService, private router: Router){}

  login(form: NgForm){
    if(form.invalid){
      console.log('invalid login form');
      return;
    }

    this.userService.login();
    this.router.navigate(['/home'])
  }

  
  }

  
  

