import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappWebdevItemComponent } from './blogapp-webdev-item.component';

describe('BlogappWebdevItemComponent', () => {
  let component: BlogappWebdevItemComponent;
  let fixture: ComponentFixture<BlogappWebdevItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappWebdevItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappWebdevItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
