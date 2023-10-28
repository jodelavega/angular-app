import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './product/detail/detail.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [ 
  {path: 'product', component: ProductComponent },
  {path: 'detail', component: DetailComponent},
  {path:'book', component: BookComponent},
  {path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
