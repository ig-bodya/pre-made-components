import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'search-example',
        loadChildren: () => import('../search-example/search-example.module').then(m => m.SearchExampleModule)
      },
      {
        path: 'filters-example',
        loadChildren: () => import('../filters-example/filters-example.module').then(m => m.FiltersExampleModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MainRoutingModule {
}
