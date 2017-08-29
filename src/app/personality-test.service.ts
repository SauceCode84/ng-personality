import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

interface Question {
  no: number;
  text: string;
  options: QuestionOption[];
}

interface QuestionOption {
  text: string;
  value: string;
}

@Injectable()
export class PersonalityTestService {

  constructor(private http: HttpClient) {
    this.getQuestions().subscribe(console.log, console.error);
  }

  getQuestions() {
    return this.http.get<Question[]>('./assets/questions.json');
  }

  getQuestion(questionNo: number) {
    return this.getQuestions()
      .flatMap(questions => questions)
      .filter(question => question.no === questionNo);
  }

}
