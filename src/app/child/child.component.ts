import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // test(): any {
  //   throw new Error('Method not implemented.');
  // }
  
  test(): any{
    console.log('123');
  }

  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
