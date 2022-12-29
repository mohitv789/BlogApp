import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappAutomotiveListComponent } from './blogapp-automotive-list.component';

describe('BlogappAutomotiveListComponent', () => {
  let component: BlogappAutomotiveListComponent;
  let fixture: ComponentFixture<BlogappAutomotiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappAutomotiveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappAutomotiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
