import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {Sort} from "../utils/sort";

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any> = [];
  @Output() setActiveSorting: EventEmitter<any> = new EventEmitter<any>()

  constructor(private renderer: Renderer2, private targetElem: ElementRef) {
  }

  @HostListener('click')
  sortData() {
    const sort = new Sort();
    const elem = this.targetElem.nativeElement;

    const order = elem.getAttribute('data-order');
    const type = elem.getAttribute('data-type');
    const property = elem.getAttribute('data-name');
    if (order === 'desc') {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'asc');
      this.setActiveSorting.emit({name: property, direction: false});
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'desc');
      this.setActiveSorting.emit({name: property, direction: true});
    }
  }
}
