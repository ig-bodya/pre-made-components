import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SearchInputComponent} from "./components/search-input/search-input.component";

const routes: Routes = [
  { path: '', component: SearchInputComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SearchExampleRoutingModule {
}
