import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { StarComponent } from './star.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './product.service';
import { DetailComponent } from './detail/detail.component';
import { ProductParameterService } from './product-parameter.service';

@NgModule({
  declarations: [
    ProductComponent,
    StarComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers:[ ProductService, ProductParameterService
    ]
})
export class ProductModule { }
