import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Videojuegos } from './videojuegos.component/videojuegos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

//servicios y modulos de routing
import { routing, appRoutingProviders } from './app.routing';
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    Videojuegos,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routing,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ 
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
