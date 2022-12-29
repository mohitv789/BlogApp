import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappWebdevDetailComponent } from './blogapp-webdev-detail.component';

describe('BlogappWebdevDetailComponent', () => {
  let component: BlogappWebdevDetailComponent;
  let fixture: ComponentFixture<BlogappWebdevDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappWebdevDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappWebdevDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
