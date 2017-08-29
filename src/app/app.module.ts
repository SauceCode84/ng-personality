import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NavBarComponent,
  LoginFormComponent,
  SignupFormComponent,
  PersonalityTestComponent,
  QuestionComponent,
  QuestionOptionComponent,
  ResultsComponent
} from './components';

import { PersonalityTestService } from './personality-test.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginFormComponent,
    SignupFormComponent,
    PersonalityTestComponent,
    QuestionComponent,
    QuestionOptionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PersonalityTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
