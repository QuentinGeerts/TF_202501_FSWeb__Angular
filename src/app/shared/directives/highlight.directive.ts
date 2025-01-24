import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective implements OnInit {

  @Input() 
  appHighlight: string = '';

  @Input()
  color: string = '';

  @Input()
  fontSize: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit (): void {
    console.log(this.el.nativeElement);

    this.appHighlight = this.appHighlight || 'yellow';
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
    this.el.nativeElement.style.fontSize = this.fontSize;

    this.class = 'bold';
    this.cursor = 'pointer';
  }

  // HostListener: permet de définir des événements à écouter et appliquer un traitement
  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.textDecoration = 'underline 1px solid red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.textDecoration = 'none';
  }

  // HostBinding: permet de définir des propriétés de l'élément hôte
  @HostBinding('class')
  private class!: string;

  @HostBinding('style.cursor')
  private cursor!: string;
}
