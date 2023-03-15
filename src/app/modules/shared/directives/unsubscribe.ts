import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive() // Needed only for Angular v9+ strict mode that enforce decorator to enable Component inheritance
export abstract class UnsubscribeDirective implements OnDestroy {
  private subscription: Subscription[] = [];

  public set subscribeTo(sub: Subscription) {
    this.subscription.push(sub);
  }

  public ngOnDestroy(): void {
    this.subscription.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
