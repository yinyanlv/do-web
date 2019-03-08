import {trigger, state, style, transition, animate, AnimationTriggerMetadata} from '@angular/animations';

export const jCollapsibleInOutAnimation: AnimationTriggerMetadata = trigger('jCollapsibleInOut', [
  state('void', style({
    height: '0'
  })),
  state('*', style({
    height: '*'
  })),
  transition('void => *', animate('300ms ease-in')),
  transition('* => void', animate('300ms ease-out'))
]);
