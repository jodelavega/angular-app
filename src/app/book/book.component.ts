import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  message: string;
  id: number;
  products: ['hello','world'];

  constructor(){
    this.message = 'test';
    this.id = 45
  }

  onValueChange(value: string): void{
    this.message = value;
  } 
}
