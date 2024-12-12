import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorTypePokemon'
})
export class ColorTypePokemonPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'red lighten-0';
        break;
      case 'Eau':
        color = 'blue lighten-0';
        break;
      case 'Plante':
        color = 'green lighten-0';
        break;
      case 'Insecte':
        color = 'green lighten-2';
        break;
      case 'Normal':
        color = 'grey lighten-2';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'purple accent-3';
        break;
      case 'Electrik':
        color = 'lime accent-2';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  }
}
