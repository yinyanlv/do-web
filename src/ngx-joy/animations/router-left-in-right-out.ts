import {animateChild, animate, AnimationTriggerMetadata, query, sequence, group, style, transition, trigger} from '@angular/animations';

export const jRouterLeftInRightOutAnimation: AnimationTriggerMetadata = trigger('jRouterLeftInRightOut', [
  transition('* => *', [
    query('j-content > :enter, j-content > :leave', [
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
        transform: 'translateX(-100%)',
        opacity: 0
      })
    ], {optional: true}),
    sequence([
      group([
        query('j-content > :leave', [
          style({
            transform: 'translateX(0)',
            opacity: 1
          }),
          animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)',
            style({
              transform: 'translateX(100%)',
              opacity: 0
            }))
        ], {optional: true}),
        query('j-content > :enter', [
          style({transform: 'translateX(-100%)'}),
          animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)',
            style({
              transform: 'translateX(0)',
              opacity: 1
            }))
        ], {optional: true})
      ]),
      query('j-content > :leave', animateChild(), {optional: true}),
      query('j-content > :enter', animateChild(), {optional: true})
    ])
  ])
]);
