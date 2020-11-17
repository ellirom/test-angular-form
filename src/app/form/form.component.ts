import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators, MaxLengthValidator, } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  'userForm': FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      text: ['',[ Validators.required, Validators.maxLength(150)] ]
      
    });
     
  }
  addForm() {
    console.log(this.userForm.value);
    this.formService.addFormItem( this.userForm.value.name, 
    this.userForm.value.email, this.userForm.value.text);
    this.userForm.reset();
 }

 get form (){
    return this.userForm.controls;
  }

}
