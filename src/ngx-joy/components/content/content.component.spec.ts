import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JContentComponent } from './content.component';

describe('JContentComponent', () => {
  let component: JContentComponent;
  let fixture: ComponentFixture<JContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
