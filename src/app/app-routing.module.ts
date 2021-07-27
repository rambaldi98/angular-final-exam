import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './books/create/create.component';
import { ListComponent } from './books/list/list.component';
import { UpdateComponent } from './books/update/update.component';
import { DeleteComponent } from './books/delete/delete.component';
import { DetailComponent } from './books/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
  ,
  {
    path: 'listBook',
    component:ListComponent
  },

  {
    path: 'createBook',
    component:CreateComponent
  },
  {
    path: 'updateBook/:id',
    component:UpdateComponent
  },

  {
    path: 'detailBook/:id',
    component:DetailComponent
  },
  {
    path: 'deleteBook/:id',
    component:DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
