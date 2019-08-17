import { ToDo } from './../todo/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(value: ToDo[], filterText: string): ToDo[] {
    if (filterText) {
      return value.filter(x => x.title.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1);
    }
    return value;
  }
}
