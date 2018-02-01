import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRegisterComponent } from './license-register.component';

describe('LicenseRegisterComponent', () => {
  let component: LicenseRegisterComponent;
  let fixture: ComponentFixture<LicenseRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
