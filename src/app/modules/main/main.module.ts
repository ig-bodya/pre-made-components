import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainComponent } from './main.component';
import {MatIconModule} from "@angular/material/icon";
import { ExpansionMenuComponent } from './components/expansion-menu/expansion-menu.component';
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [
    MainHeaderComponent,
    MainComponent,
    ExpansionMenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class MainModule { }
