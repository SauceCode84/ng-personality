import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NavBarComponent,
  LoginFormComponent,
  SignupFormComponent,
  PersonalityTestComponent,
  QuestionComponent,
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
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PersonalityTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
