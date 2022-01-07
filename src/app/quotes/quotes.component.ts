import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  totalCount: number=0;
  @Input() quote : any
  constructor() { }

  ngOnInit(): void {
  }
  myQuote: Quote[] = [new Quote("Barbra", "Self Love ambassador", "Reson", new Date(2021,12,31))]
  emmitedDetails(details:any){details.date=new Date(details.date)
    this.myQuote.push(details)
  }
  upvote(i:number){
    this.myQuote[i].upvotenumber = this.myQuote[i].upvotenumber+1
    if (this.myQuote[i].upvotenumber>this.totalCount )(this.totalCount = this.myQuote[i].upvotenumber)
  }
}
