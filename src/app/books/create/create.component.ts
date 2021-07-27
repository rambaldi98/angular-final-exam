import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { IBook } from '../../model/IBook';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private bookService: ServiceService,
              private router: Router) { }

  total? : number;

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: [''],
    });
  }

  createBook() {

    let book: IBook = this.createForm.value;

    // this.bookService.getAllBooks().subscribe(result => {
    //   book.id =  ++ result.length;
    // });
    // console.log(book);

    // book.id = this.getAllBooks();
    // console.log(book);
    this.bookService.create(book).subscribe(() => {
      alert('Create successfully!');
      this.router.navigate(['listBook']);
    });
  }
 

  // getAllBooks() {
  //   this.bookService.getAllBooks().subscribe(result => {
  //     // this.listBook = result;
  //     this.total = result.length ++ ;
  //     console.log(this.total);
  //   });
  //   return this.total;
  // }

}
