import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { IProduct } from './product';
import { Subscription } from 'rxjs';
import { ProductService} from './product.service';
import { CriteriaComponent } from '../shared/criteria/criteria.component';
import { ProductParameterService } from './product-parameter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  pageTitle: string = 'Hello World';
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string = '';
  sub!: Subscription;

  get showImage(): boolean{
    console.log(this.productParameterService.showImage);
    return this.productParameterService.showImage;
  }

  set showImage(value: boolean){
    this.productParameterService.showImage = value;
  }

  constructor(private productService: ProductService, 
    private productParameterService: ProductParameterService) { }

  @ViewChild(CriteriaComponent) filterComponent!: CriteriaComponent

  // private _listFilter: string = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   console.log('In setter:', value);
  //   this.filteredProducts = this.performFilter(value);
  // }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  displayDetail: boolean = true;
  parentListFilter!: string;

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(
    //   (products: IProduct[]) => {
    //     this.products = products;
    //     this.performFilter(this.parentListFilter);
    //   },
    //   (error: any) => this.errorMessage = error
    // );
    this.sub = this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.performFilter(this.parentListFilter);
        },
        error: err => this.errorMessage = err
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void{
    console.log(message);
    this.pageTitle = 'Product List ' + message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(message: string): void{
    if(message && message?.length>0)
      this.filteredProducts = this.products.filter(x=> x.productName.includes(message));
    else
      this.filteredProducts = this.products;
  }

  ngAfterViewInit(): void {
    this.parentListFilter = this.filterComponent.listFilter;
  }

  onValueChange(value: string): void{
    this.performFilter(value);
  }

}
