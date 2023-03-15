import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../../../shared/interfaces/user.interface";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  public currentPath?: string;
  public url?: string;
  public fullPath?: string;

  public constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.defineCurrentUrl();
    this.defineCurrentPath();
  }

  public defineCurrentPath(): void {
    this.router.events.subscribe((event) => {
        this.currentPath = this.router.url;
        this.fullPath = `${this.url}${this.currentPath}`;
    });
  }

  public defineCurrentUrl(): void {
    this.url = new URL(window.location.href).origin;
  }
}
