import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'newline'
})

@Injectable({
  providedIn: 'root'
})
export class NewlinePipeService implements PipeTransform{

  constructor() { }
  transform(value: string): string {
    // Replace '/n' or '/n1' with HTML line breaks
    // const replacedValue = value.replace(/\/n1/g, '<br>').replace(/\/n/g, '<br>').replace(/###(.*?)###/g, (match, h1) => `<strong>${h1}</strong>`).replace(/\/n2/g, '<br>').replace(/##(.*?)(\n|\n\n|$)/g, (match, h1, h2) => `<strong>${h1}</strong>${h2}`);
    const replacedValue = value.replace(/\/n1/g, '<br>').replace(/\/n/g, '<br>');

    return replacedValue
  }
}
