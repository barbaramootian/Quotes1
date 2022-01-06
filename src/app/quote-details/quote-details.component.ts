
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
myQuote: Quote[] = [new Quote("Barbra", "Self Love ambassador", "Reson", new Date(2021,12,31))]
emmitedDetails(details:any){details.date=new Date(details.date)
  this.myQuote.push(details)
}
}
