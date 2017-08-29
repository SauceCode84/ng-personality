import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type ValueSelectedResult = { questionNo: number, value: string };

@Component({
  selector: 'ngp-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question;
  value: string;

  @Output()
  valueSelected: EventEmitter<ValueSelectedResult> = new EventEmitter<ValueSelectedResult>();

  constructor() { }

  ngOnInit() {
  }

  onOptionChange(e) {
    this.valueSelected.emit({ questionNo: this.question.no, value: this.value });
  }

}
