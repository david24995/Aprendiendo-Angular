import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// Rutas
import { APP_ROUTING } from './app.routes';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';


// Servicios

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
