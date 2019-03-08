import {animateChild, AnimationTriggerMetadata, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const jAnimateChildStaggerAnimation: AnimationTriggerMetadata = trigger('jAnimateChildStagger', [
  state('50ms', style('*')),
  state('100ms', style('*')),
  state('200ms', style('*')),
  state('300ms', style('*')),
  transition('void => 50ms', query('@*', [
    stagger('50ms', [
      animateChild()
    ])
  ], {
    optional: true
  })),
  transition('void => 100ms', query('@*', [
    stagger('100ms', [
      animateChild()
    ])
  ], {
    optional: true
  })),
  transition('void => 200ms', query('@*', [
    stagger('200ms', [
      animateChild()
    ])
  ], {
    optional: true
  })),
  transition('void => 300ms', query('@*', [
    stagger('300ms', [
      animateChild()
    ])
  ], {
    optional: true
  }))
]);
