import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'labelChange',
})
export class LabelNamesPipe implements PipeTransform {

  transform(key: any): any {

    const newDate: any  = new Date(key);
    const today: any  = new Date();
    const diff = Math.abs(newDate - today);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const weekday = newDate.toLocaleString("default", { weekday: "long" })
console.log(key);
console.log(days);
    if (days == 1) {
      return 'Today';
    } else if (days == 1) {
      return 'Yesterday';
    } else if (days < 8) {
      return weekday;
    } else {
      return key;
    }
  }
}
