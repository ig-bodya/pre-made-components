import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import {FiltersExampleRoutingModule} from "./filters-example-routing.module";

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FiltersExampleRoutingModule
  ]
})
export class FiltersExampleModule { }
