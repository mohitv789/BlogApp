import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileDetailComponent } from './myprofile-detail.component';

describe('MyprofileDetailComponent', () => {
  let component: MyprofileDetailComponent;
  let fixture: ComponentFixture<MyprofileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprofileDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
