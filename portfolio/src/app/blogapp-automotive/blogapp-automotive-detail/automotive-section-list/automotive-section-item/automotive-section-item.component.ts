import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AutomotiveService } from 'src/app/blogapp-automotive/automotive.service';
import { AutoBlogSection } from 'src/app/shared/auto-blog-section';

@Component({
  selector: 'app-automotive-section-item',
  templateUrl: './automotive-section-item.component.html',
  styleUrls: ['./automotive-section-item.component.css']
})
export class AutomotiveSectionItemComponent implements OnInit {
  @Input() section: AutoBlogSection;
  @Input() index: number;
  constructor(private amService: AutomotiveService) { }

  ngOnInit() {
  }

  onShowSectionDetail() {
    this.amService.currentSection.next(this.section);
  }

}
