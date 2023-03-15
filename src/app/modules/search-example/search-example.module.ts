import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchExampleRoutingModule} from "./search-example-routing.module";
import {SearchInputComponent} from "./components/search-input/search-input.component";
import {SearchPipe} from './pipes/search.pipe';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    SearchInputComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    SearchExampleRoutingModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SearchExampleModule {
}
