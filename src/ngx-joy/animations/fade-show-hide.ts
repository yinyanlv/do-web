import {trigger, state, style, transition, animate, AnimationTriggerMetadata} from '@angular/animations';

export const jFadeShowHideAnimation: AnimationTriggerMetadata = trigger('jFadeShowHide', [
  state('show', style({
    display: 'block',
    opacity: 1
  })),
  state('hide', style({
    display: 'none',
    opacity: 0
  })),
  transition('show => hide', animate('300ms ease-out')),
  transition('hide => show', animate('300ms ease-in'))
]);
