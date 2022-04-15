import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertedAmount'
})
export class ConvertedAmountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
