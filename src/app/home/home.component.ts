import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services&model/content.service';
import { Content } from './../services&model/content.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contents: Content[];
  constructor(private contentService: ContentService) { 
    
  }

  ngOnInit() {
    this.contents = this.contentService.getPageContent();
  }
  
}
