import { Component } from '@angular/core';

import { TOP_CATEGORIES } from "./consts/top-categories";
import { CATEGORIES } from "./consts/categories";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  public topCategories = TOP_CATEGORIES;
  public categories = CATEGORIES;
  public currentCategory = 'Главная страница';
  public subCategories: string[] = [];
  public isSidebarShown = true;

  public sidebarToggle(): void {
    this.isSidebarShown = !this.isSidebarShown
  }

  public chooseCategory(e: any): void {
    this.currentCategory = e.target.innerText

    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === this.currentCategory) {
        this.subCategories = this.categories[i].subCategories;
      }
    }
  }

  public chooseTopCategory(e: any): void {
    this.currentCategory = e.target.innerText

    for (let i = 0; i < this.topCategories.length; i++) {
      if (this.topCategories[i].name === this.currentCategory) {
        this.subCategories = this.topCategories[i].subCategories.map((e => e.name));
      }
    }
  }
}
