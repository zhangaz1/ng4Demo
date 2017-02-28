import { Directive, ElementRef, HostListener, Input }    from '@angular/core';

@Directive({
    selector: '[highlight]',
})
export class HighlightDirective {
    private oldColor: string;

    @Input()
    myHighlight: string = 'yellow';

    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'gold';
        console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.oldColor = this.getBackgroundColor();
        this.highlight(this.myHighlight);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(this.oldColor);
    }


    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    private getBackgroundColor(): string {
        return this.el.nativeElement.style.backgroundColor;
    }
}