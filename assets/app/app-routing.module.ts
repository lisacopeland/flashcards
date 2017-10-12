import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeFlashCardsComponent } from './make-flash-cards/make-flash-cards.component';
import { PlayFlashCardsComponent } from './play-flash-cards/play-flash-cards.component';
import { AuthenticationComponent } from "./auth/authentication.component";
import { WelcomeComponent } from "./welcome/welcome.component";

import { auth_routes } from './auth/auth.routes';
import { flashcard_routes } from './play-flash-cards/flashcard.routes';
import { makecard_routes } from './make-flash-cards/makecard.routes';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'auth', component: AuthenticationComponent, children: auth_routes },
	{ path: 'makeflashcards', component: MakeFlashCardsComponent, children: makecard_routes },
	{ path: 'playflashcards', component: PlayFlashCardsComponent, children: flashcard_routes }
];

@NgModule({
	imports: [
		// RouterModule.forRoot(appRoutes, {useHash: true})
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
