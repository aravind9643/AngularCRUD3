import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.sc__sc_employees3__name5c13365b34841d68042c2f48.toLowerCase().includes(searchText) ||
        it.sc__sc_employees3__empid5c13365b34841d68042c2f44.toLowerCase().includes(searchText) ||
        it.sc__sc_employees3__gender5c13365b34841d68042c2f4c.toLowerCase().includes(searchText) ||
        it.sc__sc_employees3__mobile_no_5c13365c34841d68042c2f50.toLowerCase().includes(searchText) ||
        it.sc__sc_employees3__address5c13365c34841d68042c2f54.toLowerCase().includes(searchText);
    });
  }
}
