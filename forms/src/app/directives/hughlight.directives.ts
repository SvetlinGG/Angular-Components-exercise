import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

type MyVoid = () => void;

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})

export class HighlightDirective implements OnInit{

    unsubEventArray: MyVoid[] = [];

    constructor(private elRef: ElementRef, private renderer: Renderer2){}


    ngOnInit(): void {
        
        const mouseEnterEvent = this.renderer.listen(
            this.elRef.nativeElement,
            'mouseenter',
            this.mouseEnterHandler.bind(this)
        );

        const mouseLeaveEvent = this.renderer.listen(
            this.elRef.nativeElement,
            'mouseleave',
            this.mouseLeaveHandler.bind(this)
        )

        this.unsubEventArray.push(mouseEnterEvent);
        this.unsubEventArray.push(mouseLeaveEvent)

    }

    mouseEnterHandler(e: MouseEvent){
        this.renderer.addClass(this.elRef.nativeElement, 'highlight');
    }

    mouseLeaveHandler(e: MouseEvent){
        this.renderer.removeClass(this.elRef.nativeElement, 'highlight')
    }

}