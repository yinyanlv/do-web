import {animateChild, animate, AnimationTriggerMetadata, query, group, style, transition, trigger} from '@angular/animations';

export const jRouterFadeInOutAnimation: AnimationTriggerMetadata = trigger('jRouterFadeInOut', [
  transition('* => *', group([
    query('j-content > :enter, j-content > :leave ', [
      style({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      })
    ], {optional: true}),
    query('j-content > :enter', [
      style({
        opacity: 0
      })
    ], {optional: true}),
    query('j-content > :leave', [
      style({
        opacity: 1
      }),
      animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)',
        style({
          opacity: 0
        }))
    ], {optional: true}),
    query('j-content > :enter', [
      style({
        opacity: 0
      }),
      animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)',
        style({
          opacity: 1
        }))
    ], {optional: true}),
    query('j-content > :enter', animateChild(), {optional: true}),
    query('j-content > :leave', animateChild(), {optional: true})
  ]))
]);
