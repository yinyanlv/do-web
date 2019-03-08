import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

export const jSlideInOutRightAnimation: AnimationTriggerMetadata = trigger('jSlideInOutRight', [
  state('void', style({
    display: 'none',
    transform: 'translateX(100%)'
  })),
  state('*', style({
    display: 'flex',
    transform: 'translateX(0)'
  })),
  transition('void => *', animate('300ms ease-in')),
  transition('* => void', animate('300ms ease-out'))
]);
