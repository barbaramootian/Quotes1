import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  totalCount: number = 0;

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
  myCompletedquote(completedquote:boolean, index:number){
    if (completedquote) {
      let toDelete = confirm(`Are you sure you want to delete ${this.myQuote[index].name}?`)

      if (toDelete){
        this.myQuote.splice(index,1)
      }
    }
  }
}
