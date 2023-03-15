import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, filter, Subscription } from 'rxjs';

import { UnsubscribeDirective } from './unsubscribe';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[clickOutside]',
})
export class ClickOutsideDirective
  extends UnsubscribeDirective
  implements AfterViewInit, OnDestroy
{
  @Output() public clickOutside = new EventEmitter<void>();

  public documentClickSubscription: Subscription | undefined;

  public constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.subscribeTo = this.documentClickSubscription = fromEvent(
      this.document,
      'click'
    )
      .pipe(
        filter((event) => {
          return !this.isInside(event.target as HTMLElement);
        })
      )
      .subscribe(() => {
        this.clickOutside.emit();
      });
  }

  public isInside(elementToCheck: HTMLElement): boolean {
    return (
      elementToCheck === this.element.nativeElement ||
      this.element.nativeElement.contains(elementToCheck)
    );
  }
}
