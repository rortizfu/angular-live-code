import { Directive, ElementRef, Input, OnInit, HostListener, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {
  @Input('appHighLight')
  appHighLight: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onmouseenter() {
    this.setBackground('green');
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.setBackground();
  }
  
  ngOnInit(): void {
    this.setBackground(null);
    console.log(this.appHighLight);
  }


  public setBackground(color?) {
    this.el.nativeElement.style.backgroundColor = color || this.appHighLight;
  }

}
