import { Component, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MaxCountDirective } from '../directives/max-count.directive';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MaxCountDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('loginForm')form: NgForm | undefined;

  maxCountNumber = 4;

  formSubmitHandler(){
     const form = this.form!;
    
     

    if (form?.invalid) {
      console.log('This form is invalid!');
      return;

    }

    form.reset();
   }
}
