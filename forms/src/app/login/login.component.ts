import { Component, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('loginForm')form: NgForm | undefined;

  formSubmitHandler(){
     const form = this.form!;
    
     

    if (form?.invalid) {
      console.log('This form is invalid!');
      return;

    }

    form.reset();
   }
}
