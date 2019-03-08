import {trigger, state, style, transition, animate, AnimationTriggerMetadata} from '@angular/animations';

export const jCollapsibleShowHideAnimation: AnimationTriggerMetadata = trigger('jCollapsibleShowHide', [
  state('show', style({
    display: 'block',
    height: '*'
  })),
  state('hide', style({
    display: 'none',
    height: '0'
  })),
  transition('show => hide', animate('300ms ease-out')),
  transition('hide => show', animate('300ms ease-in'))
]);
