import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchInputComponent implements OnInit{

  searchText = '';
  exampleList: string[] = ['Asus', 'Dell', 'Acer', 'Apple', 'HP', 'Lenovo', '123', 'Моршинська', 'Знаменівська']

  ngOnInit(): void {
    this.exampleList.sort((a,b)=> a.localeCompare(b))
  }
}
