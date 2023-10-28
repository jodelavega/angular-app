import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {path: "test", component: ParentComponent,
    children: [
      {path: "child", component: ChildComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
