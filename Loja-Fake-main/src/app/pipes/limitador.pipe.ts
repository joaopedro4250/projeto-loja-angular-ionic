import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitador',
  standalone:false
})
export class LimitadorPipe implements PipeTransform {
  transform(value: string, limite: number): string {
    if (!value) return '';
    return value.length > limite ? value.slice(0, limite) + '...' : value;
  }
}
