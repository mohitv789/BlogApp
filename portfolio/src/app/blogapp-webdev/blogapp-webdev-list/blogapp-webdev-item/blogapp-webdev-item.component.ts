import { Component, Input, OnInit } from '@angular/core';
import { WebdevPostModel } from '../../webdev_post.model';

@Component({
  selector: 'app-blogapp-webdev-item',
  templateUrl: './blogapp-webdev-item.component.html',
  styleUrls: ['./blogapp-webdev-item.component.css']
})
export class BlogappWebdevItemComponent implements OnInit {
  @Input() blog: WebdevPostModel;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
