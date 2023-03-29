import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { IUser } from '../../../shared/interfaces/user.interface';
import { NavItems } from './enums/nav-items';
import { INavItem } from './interfaces/nav-item.interface';
import { AccountService } from '../../../account/account.service';
import { AuthService } from '../../../auth/auth.service';
import { RoutesEnum } from '../../../shared/enums/routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() public currentPath?: string;
  @Input() public userInfo?: IUser | null;

  public routes = RoutesEnum;

  public isProgressBarWorks: Observable<number> | undefined;
  public tools: INavItem[] = NavItems;
  public isFindFormShown = false;
  public test = false;

  public constructor(
    public router: Router,
    private dialog: MatDialog,
    private accountService: AccountService,
    private authService: AuthService
  ) {}

  // public login(): void {
  //   this.dialog.open(SignInComponent, {
  //     width: '25vw',
  //     minWidth: '250px',
  //     maxWidth: '500px',
  //   });
  // }

  public logOut(): void {
    this.authService.signOut();
  }

  // public signUp(): void {
  //   this.dialog.open(SignUpComponent, {
  //     width: '25vw',
  //     minWidth: '250px',
  //     maxWidth: '500px',
  //   });
  // }

  public showFindFormVisibility(event: MouseEvent): void {
    event.stopPropagation();
    this.isFindFormShown = true;
  }

  public hideFindFormVisibility(): void {
    this.test = true;
    setTimeout(() => {
      this.isFindFormShown = false;
      this.test = false;
    }, 500);
  }
}
