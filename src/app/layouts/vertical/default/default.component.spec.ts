import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDefaultComponent } from './default.component';

describe('VerticalDefaultComponent', () => {
  let component: VerticalDefaultComponent;
  let fixture: ComponentFixture<VerticalDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});