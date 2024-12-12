import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService, private auth: AuthService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList()
    .subscribe(pokemonlist => {
      this.pokemonList = pokemonlist;
      this.pokemonList.sort((pokemonLinkPicture1, pokemonLinkPicture2) => pokemonLinkPicture1.picture.localeCompare(pokemonLinkPicture2.picture));
    });
  }

  logout() {
    this.auth.logout();
  }
}
