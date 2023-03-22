import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipment.service";
import {HeavyWeaponry} from "../../models/heavy-weaponry";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  equipments: HeavyWeaponry[] = [];

  constructor(public equipmentService: EquipmentService) {
  }

  ngOnInit(): void {
    this.equipmentService.getAllEquipment().subscribe(item => {
      this.equipments = item;
    });
  }

  sortByName(array: HeavyWeaponry[]): void {
    array.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  }
}
