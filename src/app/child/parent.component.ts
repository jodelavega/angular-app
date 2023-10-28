import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit  {
  color: string = '123';

  @ViewChild(ChildComponent)
  child!: ChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //console.log();
    this.child.test()
    //this.test = this.child;
  }

}
