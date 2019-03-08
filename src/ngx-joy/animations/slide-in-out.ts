import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';

export const jSlideInOutAnimation: AnimationTriggerMetadata = trigger('jSlideInOut', [
  transition('void => left-in-right-out', [
    style({
      transform: 'translateX(-100%)'
    }),
    animate('300ms ease-in', style({
      transform: 'translateX(0)'
    }))
  ]),
  transition('left-in-right-out => void', [
    style({
      transform: 'translateX(0)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateX(100%)'
    }))
  ]),
  transition('void => right-in-left-out', [
    style({
      transform: 'translateX(100%)'
    }),
    animate('300ms ease-in', style({
      transform: 'translateX(0)'
    }))
  ]),
  transition('right-in-left-out => void', [
    style({
      transform: 'translateX(0)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateX(-100%)'
    }))
  ])
]);
