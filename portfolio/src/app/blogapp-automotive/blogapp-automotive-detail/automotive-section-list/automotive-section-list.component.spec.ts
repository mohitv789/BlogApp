import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveSectionListComponent } from './automotive-section-list.component';

describe('AutomotiveSectionListComponent', () => {
  let component: AutomotiveSectionListComponent;
  let fixture: ComponentFixture<AutomotiveSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveSectionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
