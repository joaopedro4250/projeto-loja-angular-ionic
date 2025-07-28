import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
  standalone:false
})
export class DestaqueDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.03)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 8px 22px rgba(0,0,0,0.3)');
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #ff9900');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    this.renderer.removeStyle(this.el.nativeElement, 'border');
  }
}
