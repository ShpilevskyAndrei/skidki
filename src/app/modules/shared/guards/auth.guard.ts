import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AgroexToastService } from 'ngx-agroex-toast';

import { AuthService } from '../../auth/auth.service';
import { RoutesEnum } from '../enums/routes.enum';
import { TOAST_CONFIG } from '../constants/toast-config';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  public constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: AgroexToastService
  ) {}

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isSignedIn) {
      void this.router.navigate([RoutesEnum.SignIn]);
      this.toastService.addToast(TOAST_CONFIG.auth.isSignedIn.error);

      return false;
    }
    return true;
  }
}
