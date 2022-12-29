import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevLikeComponent } from './webdev-like.component';

describe('WebdevLikeComponent', () => {
  let component: WebdevLikeComponent;
  let fixture: ComponentFixture<WebdevLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevLikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdevLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
