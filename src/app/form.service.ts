import { Injectable } from '@angular/core';
import { Form } from './form.models';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  
formItems: Form[] = [];

  constructor(
    
  ) { }
getAllFormItem(){
  return this.formItems
}

addFormItem( name: string, email: string, text: string){
this.formItems.push({
  name: name,
  email: email,
  text: text
})

}

}


 

