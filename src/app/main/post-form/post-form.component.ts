import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  postForm: any;
  id = null;

  @Input() set post(val:any){
    this.id = val.id;
    this.postForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
     });
  };

 

  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(): void {
    
  }

  saveForm(){
    // console.log(this.postForm.value);
    if(this.id){
      this.apiService.updatePost(this.id,
        this.postForm.value.title, this.postForm.value.description).subscribe(
          result => console.log(result),
          error => console.log(error)
        );
    }else{
      this.apiService.createPost(
        this.postForm.value.title, this.postForm.value.description).subscribe(
          result => console.log(result),
          error => console.log(error)
        );
    }
  }
}
