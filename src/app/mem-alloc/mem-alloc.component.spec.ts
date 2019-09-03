import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemAllocComponent } from './mem-alloc.component';

describe('MemAllocComponent', () => {
  let component: MemAllocComponent;
  let fixture: ComponentFixture<MemAllocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemAllocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemAllocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
