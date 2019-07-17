import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../services&model/content.service';
import { Content } from './../services&model/content.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  @Input() contents: Content;

  constructor() { 
    
  }

  ngOnInit() {
  }
  

}
