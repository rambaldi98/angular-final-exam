import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IBook } from 'src/app/model/IBook';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  book: IBook = {};

  id : any;
  constructor(private bookService : ServiceService,
              private activeRouter : ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRouter.paramMap.subscribe((paramMap : ParamMap) => {
        this.id = paramMap.get('id');
        this.bookService.getBookById(this.id).subscribe(result => {
          this.book = result;
        });
      });
  }

}
