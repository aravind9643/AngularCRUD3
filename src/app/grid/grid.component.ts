import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() ParentData;
  @Input() ParentCols;
  @Input() ParentForm;
  displaycols;
  cols;
  showNxt = false;
  constructor() { }

  ngOnInit() {
    this.displaycols = Object.keys(this.ParentCols);
    this.cols = Object.values(this.ParentCols);
  }
  @Output()
  delete: EventEmitter<object> = new EventEmitter<object>();

  @Output()
  scroll: EventEmitter<any> = new EventEmitter();

  @Output()
  nextpage: EventEmitter<any> = new EventEmitter();

  @Output()
  chageSort: EventEmitter<any> = new EventEmitter();

  deleteData(obj) {
    this.delete.emit(obj);
  }
  onScroll() {
    this.scroll.emit();
    this.showNxt = true;
  }
  next() {
    this.nextpage.emit();
  }
  sort() {
    this.chageSort.emit();
  }
}
