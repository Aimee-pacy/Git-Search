import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCaloring]'
})
export class CaloringDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('teal');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
