import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  heroe: Heroe;
  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroeService,
              private router: Router) {
    this.activatedRoute.params.subscribe( parms => {
      this.heroe = this.heroeService.obtenerHeore(+parms['id'].toString())
      console.log(this.heroe);
    })
   }

  ngOnInit(): void {
  }

  regresar() {
    console.log('El usuario regreso a galeria');
    // this.router.navigate(['/galeria']);
    this.router.navigateByUrl('/galeria')
  }

}
