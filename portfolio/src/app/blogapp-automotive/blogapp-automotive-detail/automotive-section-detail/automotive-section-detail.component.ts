import { Component, Input, OnInit } from '@angular/core';
import { AutoBlogSection } from 'src/app/shared/auto-blog-section';
import { AutomotiveService } from '../../automotive.service';

@Component({
  selector: 'app-automotive-section-detail',
  templateUrl: './automotive-section-detail.component.html',
  styleUrls: ['./automotive-section-detail.component.css']
})
export class AutomotiveSectionDetailComponent implements OnInit {
  section: AutoBlogSection;
  constructor(private amService: AutomotiveService) { }

  ngOnInit() {
    this.amService.currentSection.subscribe((sec:AutoBlogSection) => {
      this.section = sec;
    })
  }

}
