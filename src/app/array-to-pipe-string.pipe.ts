import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arrayToPipeString',
  standalone: true
})
export class ArrayToPipeStringPipe implements PipeTransform {

    transform(value: string) {
        let json = JSON.parse(value);
        console.log(json);
        return json.join(',');

    }
}
