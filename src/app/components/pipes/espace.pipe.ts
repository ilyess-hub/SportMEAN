import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espace'
})
export class EspacePipe implements PipeTransform {

  transform(ch: string): any {
    let res='';
    for (let i = 0; i < ch.length; i++) {
      if (ch[ i ] == ' ') {
        res = res + '-';
      }
      else {
        res = res + ch[ i ];//sans inverser 
      }
    }
    return res;
  }
}
