import {trigger, state, style, transition, animate} from '@angular/animations';

export const jFadeInOutAnimation = trigger('jFadeInOut', [
  state('hide', style({
    display: 'none',
    opacity: 0
  })),
  state('show', style({
    display: 'block',
    opacity: 1
  })),
  transition('show => hide', animate('300ms ease-out')),
  transition('hide => show', animate('300ms ease-in'))
]);
