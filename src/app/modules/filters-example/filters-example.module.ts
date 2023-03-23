import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import {FiltersExampleRoutingModule} from "./filters-example-routing.module";
import { SortDirective } from './directives/sort.directive';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ItemListComponent,
    SortDirective
  ],
    imports: [
        CommonModule,
        FiltersExampleRoutingModule,
        MatIconModule
    ]
})
export class FiltersExampleModule { }
