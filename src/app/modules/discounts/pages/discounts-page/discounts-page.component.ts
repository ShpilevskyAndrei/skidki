import { Component } from '@angular/core';
import {TOP_CATEGORIES} from "../../consts/top-categories";
import {CATEGORIES} from "../../consts/categories";

@Component({
  selector: 'app-discounts-page',
  templateUrl: './discounts-page.component.html',
  styleUrls: ['./discounts-page.component.scss']
})
export class DiscountsPageComponent {
  public topCategories = TOP_CATEGORIES;
  public categories = CATEGORIES;
  public city = 'ТАШКЕНТ'
  public currentCategory = 'ВСЕ СКИДКИ';
  public subCategories: any[] = [];
  public isSidebarShown = true;

  public ngOnInit(): void {
    this.chooseAllCategory(this.currentCategory)
  }

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
        this.subCategories = this.topCategories[i].subCategories;
      }
    }
  }

  public chooseAllCategory(allCat: string): void {
    for (let i = 0; i < this.topCategories.length; i++) {
      if (this.topCategories[i].name === allCat) {
        this.subCategories = this.topCategories[i].subCategories;
      }
    }
  }
}
