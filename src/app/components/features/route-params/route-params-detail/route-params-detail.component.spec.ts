import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamsDetailComponent } from './route-params-detail.component';

describe('RouteParamsDetailComponent', () => {
  let component: RouteParamsDetailComponent;
  let fixture: ComponentFixture<RouteParamsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteParamsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
