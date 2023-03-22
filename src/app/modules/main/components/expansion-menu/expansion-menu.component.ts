import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Example} from "../../models/example";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-expansion-menu',
  templateUrl: './expansion-menu.component.html',
  styleUrls: ['./expansion-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpansionMenuComponent implements OnInit {

  examples: Example[] = [
    {
      name: 'Search',
      route: '/search-example'
    },
    {
      name: 'Filters',
      route: '/filters-example'
    },
    {
      name: 'Example 3',
      route: 'example-n'
    },
    {
      name: 'Example 4',
      route: 'example-n'
    },
    {
      name: 'Example 5',
      route: 'example-n'
    },
    {
      name: 'Example 6',
      route: 'example-n'
    },
    {
      name: 'Example 7',
      route: 'example-n'
    }
  ]
  nameOfExample: string = 'Choose an example';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.nameOfExample = 'Choose an example';
        }
      }
    });
  }

  ngOnInit(): void {
    this.examples.sort((a, b) => a.name.localeCompare(b.name));
    if (this.router.url !== '/') {
      this.examples.forEach(item => {
          if (item.route === this.router.url) {
            this.nameOfExample = item.name;
          }
        }
      )
    }
  }

  changeNameOfExample(name: string): void {
    this.nameOfExample = name;
  }
}
