import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddFormComponent } from './add-form/add-form.component';
import { AddFormItemComponent } from './add-form-item/add-form-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AddFormComponent,
    AddFormItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
