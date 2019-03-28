import {NgModule} from '@angular/core';
import {JKeysPipe} from './keys.pipe';

const pipes = [
  JKeysPipe
];

@NgModule({
  declarations: [
    ...pipes
  ],
  exports: [
    ...pipes
  ]
})
export class JPipesModule {

}
