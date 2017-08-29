import { Component, OnInit } from '@angular/core';
import { PersonalityTestService } from "../../personality-test.service";

@Component({
  selector: 'ngp-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss']
})
export class PersonalityTestComponent implements OnInit {

  constructor(private testService: PersonalityTestService) { }

  ngOnInit() {
  }

}
