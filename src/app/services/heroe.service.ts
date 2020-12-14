import { Injectable } from '@angular/core';
import { heroes } from '../const/heroes.const';
import { Heroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  private heroes: Heroe[] = []
  constructor() { 
    console.log('este es un servicio');
    this.heroes = heroes;
  }

  obtenerHeroes( ): Heroe[] {
    return this.heroes;
  }

  obtenerHeore(index: number): Heroe {
    return this.heroes[index];
  }
}
