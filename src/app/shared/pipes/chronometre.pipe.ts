import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronometre',
  standalone: false
})
export class ChronometrePipe implements PipeTransform {

  transform(value: number): string {

    if (!value) return '00:00';

    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

}
