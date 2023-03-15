import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { IUser } from '../../../shared/interfaces/user.interface';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-header-container',
  template: `<app-header
    [userInfo]="userInfo | async"
    [currentPath]="currentPath"
  ></app-header>`,
})
export class HeaderContainerComponent implements OnInit {
  public currentPath: string | undefined;
  public userInfo: Observable<IUser | null> = new Observable<IUser | null>();

  public constructor(
    public router: Router,
  ) {}

  public ngOnInit(): void {
    this.defineCurrentPath();
  }

  public defineCurrentPath(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.router.url;
      }
    });
  }
}
