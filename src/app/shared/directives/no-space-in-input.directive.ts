import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoSpaceInInput]'
})
export class NoSpaceInInputDirective {

  constructor(private el: ElementRef) { }
  
  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    let inputValue = inputElement.value;

    // Remove leading spaces
    if (inputValue.startsWith(' ')) {
      inputValue = inputValue.trimStart();
    }

    // Update the input value
    inputElement.value = inputValue;
  }
}
