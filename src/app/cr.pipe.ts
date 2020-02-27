import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cr'
})
export class CrPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 1) { return Math.round(value).toString(); }
    if (value <= 0.125) { return '1/8'; } else if (value <= 0.25) { return '1/4'; } else { return '1/2'; }
}

}
