import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heoreService: HeroeService) { 
    this.heroes = this.heoreService.obtenerHeroes();
  }

  ngOnInit(): void {
  }
  

}
