import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent extends UnsubscribeDirective implements OnInit {
  public currentPath?: string;
  public url?: string;
  public fullPath?: string;

  public constructor(private router: Router) {
    super();
  }

  public ngOnInit(): void {
    this.defineCurrentUrl();
    this.defineCurrentPath();
  }

  public defineCurrentPath(): void {
    this.subscribeTo = this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
      this.fullPath = `${this.url}${this.currentPath}`;
    });
  }

  public defineCurrentUrl(): void {
    this.url = new URL(window.location.href).origin;
  }
}
