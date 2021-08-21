import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsComponent } from './artists/artists.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ArtistdetailComponent } from './artists/artistdetail/artistdetail.component';

const appRoutes: Routes = [
 { path: '', redirectTo: '/artists', pathMatch: 'full' },
 {path : 'artists', component : ArtistsComponent,
 children : [
{path : ':id', component : ArtistdetailComponent}
 ]
},
 {path : 'templateForms', component : FormsComponent},
{path : 'reactiveForms', component : ReactiveformsComponent},
{ path: '**', redirectTo: '/artists', pathMatch: 'full' } 
];

@NgModule({
 imports : [RouterModule.forRoot(appRoutes)],
 exports : [RouterModule]
})
export class AppRoutingModule {}
