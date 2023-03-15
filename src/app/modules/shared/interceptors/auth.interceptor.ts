import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../services/token.service';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request.headers.set('Content-Type', 'application/json');

    if (this.authService.isSignedIn) {
      const accessToken = this.tokenService.getAccessToken();
      const userId = localStorage.getItem('UserId');

      request = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${accessToken}`)
          .set('UserId', `${userId}`),
      });
    }

    return next.handle(request);
  }
}
