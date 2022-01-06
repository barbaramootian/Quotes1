import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
@Output() formemit:any = new EventEmitter()
  constructor() { }
   
  ngOnInit(): void {
  }
myQuote : Quote = new Quote("", "", "", new Date())
receive(formDetails:any){
  let myFormDetails = new Quote(formDetails.value.name, formDetails.value.quote, formDetails.value.author, formDetails.value.date)
  this.formemit.emit(myFormDetails)
  formDetails.reset()
}
}
