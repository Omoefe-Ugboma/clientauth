import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{

  @Input() post:any;

  postForm = new FormGroup({
   title: new FormControl(''),
   description: new FormControl('')
  });

  constructor(){}

  ngOnInit(): void {
    
  }

  saveForm(){
    console.log(this.postForm.value);
  }
}
