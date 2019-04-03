import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

export const jSlideBottomInOutAnimation: AnimationTriggerMetadata = trigger('jSlideBottomInOut', [
  state('void', style({
    display: 'none',
    transform: 'translateY(100%)'
  })),
  state('*', style({
    display: 'flex',
    transform: 'translateY(0)'
  })),
  transition('void => *', animate('300ms ease-in')),
  transition('* => void', animate('300ms ease-out'))
]);
