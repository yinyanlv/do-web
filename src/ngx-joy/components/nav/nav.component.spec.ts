import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JNavComponent} from './nav.component';

describe('JNavComponent', () => {
  let component: JNavComponent;
  let fixture: ComponentFixture<JNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
