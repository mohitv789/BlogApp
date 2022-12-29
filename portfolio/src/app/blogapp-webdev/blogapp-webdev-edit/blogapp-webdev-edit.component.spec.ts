import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappWebdevEditComponent } from './blogapp-webdev-edit.component';

describe('BlogappWebdevEditComponent', () => {
  let component: BlogappWebdevEditComponent;
  let fixture: ComponentFixture<BlogappWebdevEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappWebdevEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappWebdevEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
