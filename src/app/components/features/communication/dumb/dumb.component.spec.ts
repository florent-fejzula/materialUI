/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DumbComponent } from './dumb.component';

describe('DumbComponent', () => {
  let component: DumbComponent;
  let fixture: ComponentFixture<DumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
