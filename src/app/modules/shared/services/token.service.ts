import { Injectable } from '@angular/core';

import {
  ACCESS_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
} from '../constants/storage-keys';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
  }

  public removeAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
  }

  public setRefreshToken(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refreshToken);
  }

  public removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
  }
}
