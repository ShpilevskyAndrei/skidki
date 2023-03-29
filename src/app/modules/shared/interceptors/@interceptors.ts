import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClassProvider } from '@angular/core';

import { ProgressBarInterceptor } from './progress-bar.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { ContentTypeInterceptor } from './content-type.interceptor';
import { UserIdInterceptor } from './user-id.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const INTERCEPTORS: ClassProvider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ProgressBarInterceptor,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: UserIdInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
