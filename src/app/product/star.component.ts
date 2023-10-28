import { Component, EventEmitter, OnChanges, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  onClick(): void {
    this.ratingClicked.emit(`the rating ${this.rating}`)
  }

  ngOnChanges(): void{
    console.log(this.rating);
    this.cropWidth = this.rating * 75/5;
  }

}
