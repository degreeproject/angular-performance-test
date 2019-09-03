import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOMTestComponent } from './dom-test.component';

describe('DOMTestComponent', () => {
  let component: DOMTestComponent;
  let fixture: ComponentFixture<DOMTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DOMTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOMTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
