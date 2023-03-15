import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  public isLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoading$$.asObservable();

  public setLoading(isLoading: boolean): void {
    this.isLoading$$.next(isLoading);
  }
}
