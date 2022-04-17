import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertedAmount',
})
export class ConvertedAmountPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return value;
  }
}
