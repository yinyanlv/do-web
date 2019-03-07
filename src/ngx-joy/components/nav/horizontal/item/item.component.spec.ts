import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JNavHorizontalItemComponent} from './item.component';

describe('JNavHorizontalItemComponent', () => {
  let component: JNavHorizontalItemComponent;
  let fixture: ComponentFixture<JNavHorizontalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JNavHorizontalItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JNavHorizontalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
