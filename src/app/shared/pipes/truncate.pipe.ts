import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: false
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number = 15): string {
    return value.length > length ? value.substring(0, length) + '...' : value;
  }

}
