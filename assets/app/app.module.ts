import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';

import { PlayFlashCardsComponent } from './play-flash-cards/play-flash-cards.component';
import { DeckListComponent } from './play-flash-cards/deck-list.component';
import { DeckDetailComponent } from './play-flash-cards/deck-detail.component';
import { DeckPlayComponent } from './play-flash-cards/deck-play.component';

import { MakeFlashCardsComponent } from './make-flash-cards/make-flash-cards.component';
import { MakeListComponent } from './make-flash-cards/make-list.component';
import { MakeDetailComponent } from './make-flash-cards/make-detail.component';
import { MakeEditComponent } from './make-flash-cards/make-edit.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';


import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";

import { AuthService } from './auth/auth.service';
import { DeckService } from './shared/deck.service';
import { CardService } from './shared/card.service';
import { UtilsService } from './shared/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MakeFlashCardsComponent,
    PlayFlashCardsComponent,
    DeckListComponent,
    DeckDetailComponent,
    DeckPlayComponent,
    MakeListComponent,
    MakeDetailComponent,
    MakeEditComponent,
    AuthenticationComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    AppRoutingModule
  ],
  providers: [AuthService, ErrorService, DeckService, CardService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
