import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AutoBlogSection } from 'src/app/shared/auto-blog-section';

@Component({
  selector: 'app-automotive-section-list',
  templateUrl: './automotive-section-list.component.html',
  styleUrls: ['./automotive-section-list.component.css']
})
export class AutomotiveSectionListComponent implements OnInit {
  @Input() autoSections: AutoBlogSection[];
  constructor() { }

  ngOnInit(): void {
  }


}
