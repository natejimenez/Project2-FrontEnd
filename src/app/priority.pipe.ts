import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from './components/enums/priority';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value:number): String {
    return Priority[value];
  }

}
