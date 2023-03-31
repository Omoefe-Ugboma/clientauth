import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  postForm: any;
  @Input() set post(val:any){
    this.postForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
     });
  };

 

  constructor(){}

  ngOnInit(): void {
    
  }

  saveForm(){
    console.log(this.postForm.value);
  }
}
