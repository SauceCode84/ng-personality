import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
