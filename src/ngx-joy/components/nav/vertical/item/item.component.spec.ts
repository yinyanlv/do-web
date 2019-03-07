import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JNavVerticalItemComponent} from './item.component';

describe('JNavVerticalItemComponent', () => {
  let component: JNavVerticalItemComponent;
  let fixture: ComponentFixture<JNavVerticalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JNavVerticalItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JNavVerticalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
