import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogappAutomotiveEditComponent } from './blogapp-automotive-edit.component';

describe('BlogappAutomotiveEditComponent', () => {
  let component: BlogappAutomotiveEditComponent;
  let fixture: ComponentFixture<BlogappAutomotiveEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogappAutomotiveEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogappAutomotiveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
