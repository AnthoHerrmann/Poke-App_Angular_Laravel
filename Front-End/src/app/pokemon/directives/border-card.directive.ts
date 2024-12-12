import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor = '#f5f5f5';
  private defaultColor = '#009688';
  private defaultHeight = 180;
  
  constructor(private element: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorderColor(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(this.initialColor);
  }

  setHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorderColor(color: string) {
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }

}
