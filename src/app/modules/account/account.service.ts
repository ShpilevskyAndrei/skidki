import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpRequestService } from '../shared/services/http-request.service';
import {
  IUser,
  IUserChangePasswordInfo,
} from '../shared/interfaces/user.interface';
import { ApisAccountEnum } from '../shared/enums/apis.enum';
import { AuthService } from '../auth/auth.service';
import { AgroexToastService } from 'ngx-agroex-toast';
import { TOAST_CONFIG } from '../shared/constants/toast-config';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public constructor(
    private http: HttpRequestService,
    private router: Router,
    private authService: AuthService,
    private toastService: AgroexToastService
  ) {}

  public getUserInfo(): Subscription {
    return this.http.get(ApisAccountEnum.GetUserInfo).subscribe({
      next: (res: any) => {
        return res;
      },
    });
  }

  public updateUserInfo(userInfo: IUser | null): Subscription {
    return this.http.put(ApisAccountEnum.SetUserInfo, userInfo).subscribe({
      next: (res: any) => {
        this.toastService.addToast(TOAST_CONFIG.account.updateUserInfo.success)
        return res;
      },
      error: () => {
        this.toastService.addToast(TOAST_CONFIG.account.updateUserInfo.error)
      }
    });
  }

  public deleteUser(): Subscription {
    return this.http.delete(ApisAccountEnum.DeleteUser).subscribe({
      next: () => {
        this.authService.signOut();
        this.toastService.addToast(TOAST_CONFIG.account.delete.success);
      },
      error: () => {
        this.toastService.addToast(TOAST_CONFIG.account.delete.error);
      },
    });
  }

  public changePassword(newPassInfo: IUserChangePasswordInfo): Subscription {
    return this.http
      .put(ApisAccountEnum.ChangePassword, newPassInfo)
      .subscribe({
        next: () => {
          this.toastService.addToast(
            TOAST_CONFIG.account.passwordChanged.success
          );
          this.authService.signOut();
        },
        error: () => {
          this.toastService.addToast(
            TOAST_CONFIG.account.passwordChanged.error
          );
        },
      });
  }
}
