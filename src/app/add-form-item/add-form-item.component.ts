import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-add-form-item',
  templateUrl: './add-form-item.component.html',
  styleUrls: ['./add-form-item.component.css']
})
export class AddFormItemComponent implements OnInit {

  
  @Input() 'list' : Form;

  @Output() deleteItem = new EventEmitter<string>();

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(){ }

  deleteComment(email:string){
    this.deleteItem.emit(email);
  }
}
