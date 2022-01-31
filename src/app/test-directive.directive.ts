import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(
    public el: ElementRef,
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('Green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
    if (color != ''){
      this.el.nativeElement.style.background = "White";
    }
    else{
      this.el.nativeElement.style.background = "";
    }
  }

}
