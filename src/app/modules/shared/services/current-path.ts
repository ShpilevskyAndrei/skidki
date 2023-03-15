// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import {BehaviorSubject, Observable} from "rxjs";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CurrentPathService {
//   private path = '';
//   private fullUrl = '';
//
//   public constructor(private router: Router) {}
//
//   public getFullUrlPath(): Observable<string> {
//     const url = new URL(window.location.href).origin;
//
//     this.router.events.subscribe(() => {
//       this.path = this.router.url;
//       this.fullUrl = url + this.path
//     });
//
//     return new BehaviorSubject<string>(this.fullUrl).asObservable();
//   }
// }
