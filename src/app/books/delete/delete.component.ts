import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { IBook } from '../../model/IBook';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  book: IBook = {};
  id: any;
  constructor(private bookService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.bookService.getBookById(this.id).subscribe((result) => {
        this.book = result;
      });
    });
  }

  deleteBook(){
    this.bookService.delete(this.id).subscribe((result) => {
      alert('Xóa thánh công!');
      this.router.navigate(['listBook']);
    });
  }


}
