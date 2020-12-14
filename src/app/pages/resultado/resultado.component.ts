import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string = '';
  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroeService) {
    this.activatedRoute.params.subscribe( parms => {
      this.termino = parms['termino'];
      this.heroes = this.heroeService.buscarHeroes(this.termino);
    })
   }

  ngOnInit(): void {
  }

}
