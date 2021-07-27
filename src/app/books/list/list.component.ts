import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/IBook';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  [x: string]: any;

  listBook : IBook[] = [];
  total : number = 0;
  constructor(private bookService: ServiceService) { }

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks():IBook[] {
    this.bookService.getAllBooks().subscribe(result => {
      this.listBook = result;
      this.total = this.listBook.length;
    });
    return this.listBook;
  }


}


