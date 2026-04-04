import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private fb: FormBuilder){}

  handleSubmit(){
    
  }

}
