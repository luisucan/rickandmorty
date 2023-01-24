import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page: number = 1;

  @Output()
  onPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePagePlus(){
    this.page = this.page + 1;
    this.onPage.emit(this.page);
  }
  changePageMinus(){
    this.page = this.page - 1;
    this.onPage.emit(this.page);
  }

}
