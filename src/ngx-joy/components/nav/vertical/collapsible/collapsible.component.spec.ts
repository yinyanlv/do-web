import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JNavVerticalCollapsibleComponent} from './collapsible.component';

describe('JNavVerticalCollapsibleComponent', () => {
  let component: JNavVerticalCollapsibleComponent;
  let fixture: ComponentFixture<JNavVerticalCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JNavVerticalCollapsibleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JNavVerticalCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
