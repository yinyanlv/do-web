import { Component } from '@angular/core';
import {SubjectService} from 'ngx-joy/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'do-web';

  constructor(private subject: SubjectService) {

    this.subject.subscribe('test', (data) => {
      this.title = data;
    });

    setTimeout(() => {
      this.subject.publish('test', 'changing');
    }, 3000);
  }
}
