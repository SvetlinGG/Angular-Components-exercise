import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { EmailDirective } from "../../directives/email.directive";
import { DOMAINS } from '../../constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, NgClass, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  domains = DOMAINS;

  @ViewChild('loginForm') form: NgForm | undefined;

  formSubmitHandler() {
    const form = this.form;
    

    if (form?.invalid) {
      console.log('This form is invalid!');
      return;
    }

    form?.reset();
  }

  
  
}
