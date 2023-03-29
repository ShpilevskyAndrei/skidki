import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProgressBarInterceptor } from './progress-bar.interceptor';
import { AuthInterceptor } from './auth.interceptor';

export const interceptorProviders = {
  progressBar: {
    provide: HTTP_INTERCEPTORS,
    useClass: ProgressBarInterceptor,
    multi: true,
  },
  auth: { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
};
