import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappWebdevListComponent } from './blogapp-webdev-list.component';

describe('BlogappWebdevListComponent', () => {
  let component: BlogappWebdevListComponent;
  let fixture: ComponentFixture<BlogappWebdevListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappWebdevListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappWebdevListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
