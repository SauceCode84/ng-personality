import { Component, OnInit } from '@angular/core';
import { PersonalityTestService } from "../../personality-test.service";

@Component({
  selector: 'ngp-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss']
})
export class PersonalityTestComponent implements OnInit {
  
  questions;
  currentTest = {};

  constructor(private testService: PersonalityTestService) { }

  ngOnInit() {
    this.questions = this.testService.getQuestions();
  }

  onPrevious() {

  }

  onNext() {
    
  }

}
