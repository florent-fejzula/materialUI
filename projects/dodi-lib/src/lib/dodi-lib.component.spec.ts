import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodiLibComponent } from './dodi-lib.component';

describe('DodiLibComponent', () => {
  let component: DodiLibComponent;
  let fixture: ComponentFixture<DodiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
