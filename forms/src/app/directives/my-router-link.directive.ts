import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]',
  standalone: true,
})
export class MyRouterLinkDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    this.renderer.listen(this.elRef.nativeElement, 'click', this.clickHandler.bind(this))
  }

  clickHandler(){
    console.log('click');
    
  }

}
