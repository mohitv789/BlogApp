import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappAutomotiveDetailComponent } from './blogapp-automotive-detail.component';

describe('BlogappAutomotiveDetailComponent', () => {
  let component: BlogappAutomotiveDetailComponent;
  let fixture: ComponentFixture<BlogappAutomotiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappAutomotiveDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappAutomotiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
