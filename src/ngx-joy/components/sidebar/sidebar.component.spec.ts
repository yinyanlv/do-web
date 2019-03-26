import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSidebarComponent } from './sidebar.component';

describe('JSidebarComponent', () => {
  let component: JSidebarComponent;
  let fixture: ComponentFixture<JSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
