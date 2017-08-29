import { Component, EventEmitter, Input, Output } from '@angular/core';

type ValueSelectedResult = { questionNo: number, value: string };

@Component({
  selector: 'ngp-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input()
  question;
  
  answerValue: string;

  @Input()
  get answer() {
    return this.answerValue;
  }

  set answer(value) {
    this.answerValue = value;
    this.answerChange.emit(this.answerValue);
  }

  @Output()
  answerChange = new EventEmitter();

  constructor() { }

}
