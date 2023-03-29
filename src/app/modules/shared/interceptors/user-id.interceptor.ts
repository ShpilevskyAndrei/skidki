import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { USER_ID_STORAGE_KEY } from '../constants/storage-keys';

@Injectable()
export class UserIdInterceptor implements HttpInterceptor {
  public constructor(private authService: AuthService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isSignedIn) {
      const userId = localStorage.getItem(USER_ID_STORAGE_KEY);

      request = request.clone({
        headers: request.headers.set(USER_ID_STORAGE_KEY, `${userId}`),
      });
    }

    return next.handle(request);
  }
}
