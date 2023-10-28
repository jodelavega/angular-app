import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaComponent } from './criteria/criteria.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [CriteriaComponent, FilterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CriteriaComponent, FilterComponent]
})
export class SharedModule { }
