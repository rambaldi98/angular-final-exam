import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IBook } from 'src/app/model/IBook';
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup;
  id: any;
  book: IBook = {};

  constructor(private bookService: ServiceService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: ['']
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.bookService.getBookById(this.id).subscribe((result) => {
        this.book = result;
        this.updateForm.patchValue(this.book);
      });
    });
  }

  // tslint:disable-next-line:typedef
  updateBook() {
    if (this.updateForm.valid) {
      const {value} = this.updateForm;
      const data = {
        ...this.book,
        ...value
      };
      this.bookService.update(data).subscribe(result => {
          alert('Update successfully!');
          this.router.navigate(['listBook']);
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
