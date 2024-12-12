import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.scss'
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
