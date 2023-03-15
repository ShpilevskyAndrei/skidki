import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProgressBarService } from '../../overall/components/progress-bar/progress-bar.service';

@Injectable()
export class ProgressBarInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  public constructor(private loadingService: ProgressBarService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loadingService.setLoading(true);

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}
