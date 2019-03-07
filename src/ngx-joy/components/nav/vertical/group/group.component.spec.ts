import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JNavVerticalGroupComponent} from './group.component';

describe('JNavVerticalGroupComponent', () => {
  let component: JNavVerticalGroupComponent;
  let fixture: ComponentFixture<JNavVerticalGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JNavVerticalGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JNavVerticalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
