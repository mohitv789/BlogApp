import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveSectionItemComponent } from './automotive-section-item.component';

describe('AutomotiveSectionItemComponent', () => {
  let component: AutomotiveSectionItemComponent;
  let fixture: ComponentFixture<AutomotiveSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveSectionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
