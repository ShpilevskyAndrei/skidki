import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  public constructor(private http: HttpClient) {}

  public get(
    url: string,
    params?: HttpParams | any,
    options?: any
  ): Observable<any> {
    const param = params ? `?${params.toString()}` : '';

    return this.http.get<any>(`${environment.apiUrl}/${url}${param}`, options);
  }

  public post(url: string, body: any | null, options?: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${url}`, body, options);
  }

  public put(url: string, body?: any | null, options?: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/${url}`, body, options);
  }

  public patch(
    url: string,
    body: any | null,
    id?: string,
    options?: any
  ): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/${url}${id}`, body, options);
  }

  public delete(url: string, options?: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${url}`, options);
  }
}
