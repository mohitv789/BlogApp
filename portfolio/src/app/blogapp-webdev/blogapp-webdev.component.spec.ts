import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappWebdevComponent } from './blogapp-webdev.component';

describe('BlogappWebdevComponent', () => {
  let component: BlogappWebdevComponent;
  let fixture: ComponentFixture<BlogappWebdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappWebdevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappWebdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
