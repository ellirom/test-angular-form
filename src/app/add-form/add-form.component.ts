import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Form } from '../form.models';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {


  'lists':Form[];
    
  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
  this.lists = this.formService.getAllFormItem();
 
  }

  deleteComment(email:string) {

  this.lists.splice(this.lists.findIndex((i) => i.email === email  ), 1);
}
}

  


