import {animate, animation, AnimationTriggerMetadata, style, transition, trigger, useAnimation} from '@angular/animations';

const customAnimation = animation([
  style({
    opacity: '{{opacity}}',
    transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
  }),
  animate('{{duration}} {{delay}} cubic-bezier(0, 0, 0.2, 1)', style('*'))
], {
  params: {
    opacity: 0,
    scale: 1,
    x: 0,
    y: 0,
    z: 0,
    duration: '300ms',
    delay: '0ms'
  }
});

export const jNormalInAnimation: AnimationTriggerMetadata = trigger('jNormalIn', [
  transition('void => *', useAnimation(customAnimation))]
);
