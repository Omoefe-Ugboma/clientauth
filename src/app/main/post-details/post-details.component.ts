import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{

  @Input() post: any;

  ngOnInit(): void {
    
  }

}
