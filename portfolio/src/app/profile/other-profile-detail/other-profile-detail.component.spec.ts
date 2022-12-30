import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProfileDetailComponent } from './other-profile-detail.component';

describe('OtherProfileDetailComponent', () => {
  let component: OtherProfileDetailComponent;
  let fixture: ComponentFixture<OtherProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherProfileDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
