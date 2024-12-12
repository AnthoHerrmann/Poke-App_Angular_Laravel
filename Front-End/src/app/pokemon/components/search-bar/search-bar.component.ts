import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {

  searchTerms = new Subject<string>();
  pokemonList$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList$ = this.searchTerms.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      switchMap(recherche => this.pokemonService.searchPokemonList(recherche))
    );
  }

  search(recherche: string): void {
    this.searchTerms.next(recherche);
  }

  goToDetailsPokemon(pokemon: Pokemon): void {
    const link = ['/pokemon/', pokemon.id];
    this.router.navigate(link);
  }
}
