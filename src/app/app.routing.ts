//Importamos los modulos y servicios del routing en Angular
//Servicio
import { ModuleWithProviders } from '@angular/core';
//Modulos
import { Routes, RouterModule} from '@angular/router';
//Componentes
import { Videojuegos } from './videojuegos.component/videojuegos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'zapatillas', component: ZapatillasComponent },
    { path: 'cursos/:nombre/:followers', component: CursosComponent },
    { path: 'videojuegos', component: Videojuegos },
    { path: 'externo', component: ExternoComponent },
    { path: '**', component: HomeComponent }
]

//Exportamos la configuracion
export const appRoutingProviders: Array<any> = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes)