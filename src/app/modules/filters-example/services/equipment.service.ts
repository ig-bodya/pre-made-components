import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HeavyWeaponry} from "../models/heavy-weaponry";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(public https: HttpClient) { }

  getAllEquipment(): Observable<HeavyWeaponry[]> {
    return this.https.get<HeavyWeaponry[]>('http://localhost:3000/heavy-weaponry')
  }
}
