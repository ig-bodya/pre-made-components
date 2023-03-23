import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {EquipmentService} from "../../services/equipment.service";
import {HeavyWeaponry} from "../../models/heavy-weaponry";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import {ActiveSorting} from "../../models/active-sorting";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  equipments: HeavyWeaponry[] = [];
  activeSorting: ActiveSorting = {
    name: 'name',
    direction: true
  }

  constructor(
    private renderer: Renderer2,
    private targetElem: ElementRef,
    private equipmentService: EquipmentService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('a-z', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/a-z.svg'))
    this.matIconRegistry.addSvgIcon('z-a', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/z-a.svg'))
    this.matIconRegistry.addSvgIcon('asc', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sort-ascending.svg'))
    this.matIconRegistry.addSvgIcon('desc', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sort-descending.svg'))
  }

  ngOnInit(): void {
    this.equipmentService.getAllEquipment().subscribe(item => {
      this.equipments = item;
      this.sortByName(this.equipments);
    });
  }

  sortByName(array: HeavyWeaponry[]): void {
    array.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  }

  setActiveSorting(data: ActiveSorting): void {
    this.activeSorting = {name: data.name, direction: data.direction};
  }
}
