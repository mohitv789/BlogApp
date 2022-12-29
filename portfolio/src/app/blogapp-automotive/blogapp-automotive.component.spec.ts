import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappAutomotiveComponent } from './blogapp-automotive.component';

describe('BlogappAutomotiveComponent', () => {
  let component: BlogappAutomotiveComponent;
  let fixture: ComponentFixture<BlogappAutomotiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappAutomotiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappAutomotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
