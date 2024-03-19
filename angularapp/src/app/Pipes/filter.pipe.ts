import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {
    
    console.log('filer pipe', value); // 10 users 
    console.log('search name', searchTearm);
    
    return value.filter(function(search: any) {
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
   
  }

}
