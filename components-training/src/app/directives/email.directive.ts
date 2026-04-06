import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: EmailDirective
  }]
})
export class EmailDirective implements Validator {

  @Input() appEmail: string[] = [];

  constructor() { }

}
