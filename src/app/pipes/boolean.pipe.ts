import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean, args: string[]): any {
		if(value) return 'Yes';
			else return 'No';
  }

}
