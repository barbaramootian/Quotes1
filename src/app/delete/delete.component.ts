import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
@Output() completedquote = new EventEmitter()
  constructor() {}

  ngOnInit(): void {
  }
delete(completed:boolean){
  this.completedquote.emit(completed)
}
}
