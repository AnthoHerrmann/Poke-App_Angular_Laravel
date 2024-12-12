import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { ColorTypePokemonPipe } from './pipes/color-type-pokemon.pipe';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthGuard } from '../auth.guard';

const PokemonRoutes: Routes = [
  {
    path: 'edit/pokemon/:id',
    component: EditPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemon/add',
    component: AddPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemon/:id',
    component: DetailPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemons',
    component: ListPokemonComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    ColorTypePokemonPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchBarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PokemonRoutes)
  ],
  providers: [
    PokemonService
  ]
})

export class PokemonModule {}