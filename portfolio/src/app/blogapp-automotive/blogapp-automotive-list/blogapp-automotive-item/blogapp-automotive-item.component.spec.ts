import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappAutomotiveItemComponent } from './blogapp-automotive-item.component';

describe('BlogappAutomotiveItemComponent', () => {
  let component: BlogappAutomotiveItemComponent;
  let fixture: ComponentFixture<BlogappAutomotiveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappAutomotiveItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappAutomotiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
