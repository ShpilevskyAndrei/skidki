import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentPath {
  private currentPath = new BehaviorSubject<string>('')

  public getCurrentPath(): Observable<string> {
    return this.currentPath.asObservable()
  }

  public setCurrentPath(path: string): void {
    this.currentPath.next(path);
  }
}
