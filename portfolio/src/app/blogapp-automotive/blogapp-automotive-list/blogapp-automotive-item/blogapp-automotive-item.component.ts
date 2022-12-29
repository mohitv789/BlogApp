import { Component, Input, OnInit } from '@angular/core';
import { AutomotivePostModel } from '../../automotive_post.model';

@Component({
  selector: 'app-blogapp-automotive-item',
  templateUrl: './blogapp-automotive-item.component.html',
  styleUrls: ['./blogapp-automotive-item.component.css']
})
export class BlogappAutomotiveItemComponent implements OnInit {
  @Input() blog: AutomotivePostModel;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
