import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLicenseComponent } from './vehicle-license.component';

describe('VehicleLicenseComponent', () => {
  let component: VehicleLicenseComponent;
  let fixture: ComponentFixture<VehicleLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
