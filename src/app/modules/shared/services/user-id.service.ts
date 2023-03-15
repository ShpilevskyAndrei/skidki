import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserIdService {
  public getUserId(): string | null {
    return localStorage.getItem('UserId');
  }

  public setUserId(userId: string): void {
    localStorage.setItem('UserId', userId);
  }

  public removeUserId(): void {
    localStorage.removeItem('UserId');
  }
}
