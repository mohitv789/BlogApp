import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveSectionDetailComponent } from './automotive-section-detail.component';

describe('AutomotiveSectionDetailComponent', () => {
  let component: AutomotiveSectionDetailComponent;
  let fixture: ComponentFixture<AutomotiveSectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveSectionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveSectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
