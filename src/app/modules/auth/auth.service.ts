import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AgroexToastService } from 'ngx-agroex-toast';

import { HttpRequestService } from '../shared/services/http-request.service';
import { IUser, IUserCredentials } from '../shared/interfaces/user.interface';
import { RoutesEnum } from '../shared/enums/routes.enum';
import { TOAST_CONFIG } from '../shared/constants/toast-config';
import { TokenService } from '../shared/services/token.service';
import { ApisAuthEnum } from '../shared/enums/apis.enum';
import { UserIdService } from '../shared/services/user-id.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(
    private baseService: HttpRequestService,
    private router: Router,
    private toast: AgroexToastService,
    private tokenService: TokenService,
    private userIdService: UserIdService
  ) {}

  public get isSignedIn(): boolean {
    const accessToken = this.tokenService.getAccessToken();
    const userId = this.userIdService.getUserId();

    return !!accessToken && !!userId;
  }

  public signUp(user: IUser): Subscription {
    return this.baseService.post(ApisAuthEnum.SignUp, user).subscribe({
      next: () => {
        void this.router.navigate([RoutesEnum.SignIn]);
        this.toast.addToast(TOAST_CONFIG.auth.signUp.success);
      },
      error: () => {
        void this.router.navigate([RoutesEnum.SignUp]);
        this.toast.addToast(TOAST_CONFIG.auth.signUp.error);
      },
    });
  }

  public signIn(userCredentials: IUserCredentials): Subscription {
    return this.baseService
      .post(ApisAuthEnum.SignIn, userCredentials)
      .subscribe({
        next: (res: any) => {
          this.tokenService.setAccessToken(res.token);
          this.userIdService.setUserId(res.id);
          void this.router.navigate([RoutesEnum.Dashboard]);
          this.toast.addToast(TOAST_CONFIG.auth.signIn.success);
        },
        error: () => {
          void this.router.navigate([RoutesEnum.SignIn]);
          this.toast.addToast(TOAST_CONFIG.auth.signIn.error);
        },
      });
  }

  public signOut(): void {
    this.tokenService.removeAccessToken();
    this.userIdService.removeUserId();
    void this.router.navigate([RoutesEnum.Dashboard]);
    this.toast.addToast(TOAST_CONFIG.auth.signOut.success);
  }
}
