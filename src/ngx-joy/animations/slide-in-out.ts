import {trigger, state, style, transition, animate} from '@angular/animations';

export const jSlideInOutAnimation = trigger('jSlideInOut', [
  state('hide', style({
    height: '0',
    display: 'none'
  })),
  state('show', style({
    height: '*',
    display: 'block'
  })),
  transition('show => hide', animate('300ms ease-out')),
  transition('hide => show', animate('300ms ease-in'))
]);
