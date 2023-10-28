import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  private _filterText: string;
  @Output() valueChange = 
        new EventEmitter<string>();
  @Input() bookId!: number;

  get filterText(){
    return this._filterText;
  }

  set filterText(value){
    this._filterText = value;
    this.valueChange.emit(value);
  } 


}
