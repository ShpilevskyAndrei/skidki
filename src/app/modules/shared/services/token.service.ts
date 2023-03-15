import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }

  public removeAccessToken(): void {
    localStorage.removeItem('accessToken');
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  public setRefreshToken(refreshToken: string): void {
    localStorage.setItem('refreshToken', refreshToken);
  }

  public removeRefreshToken(): void {
    localStorage.removeItem('refreshToken');
  }
}
