import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JNavHorizontalCollapsibleComponent} from './collapsible.component';

describe('JNavHorizontalCollapsibleComponent', () => {
  let component: JNavHorizontalCollapsibleComponent;
  let fixture: ComponentFixture<JNavHorizontalCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JNavHorizontalCollapsibleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JNavHorizontalCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
