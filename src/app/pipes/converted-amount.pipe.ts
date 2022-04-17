import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertedAmount',
})
export class ConvertedAmountPipe implements PipeTransform {
  transform(value: number): unknown {
    return Math.round(value * 100) / 100;
  }
}
