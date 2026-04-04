import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: MaxCountDirective
    }
  ]
})
export class MaxCountDirective implements Validator {
    @Input() appMaxCount: number | undefined;

    validate(control: AbstractControl): ValidationErrors | null{
      const len = control.value?.length ||0;
      console.log({len});
      console.log({appmaxcount: this.appMaxCount});

      if (!this.appMaxCount || len <= this.appMaxCount){
        return null;
      }
      
    return {appMaxCount: this.appMaxCount};
   }

}
