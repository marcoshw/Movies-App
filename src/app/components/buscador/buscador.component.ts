import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  indice2 :number[] = new Array(9);
  @Input() indice: number;

  peliculas: any = {};
  resultados: any = [];
  probando2: any = [];
  foto: any = {};
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, public _moviesService: PeliculasService, private router: Router) { }

  
  indexValue(val : number, indd: number) {
    return val < indd;
  }

  indexValue2(val : number) {
    let aux1 = val >= 3;
    let aux2 = val <= 5;
    return aux1 && aux2 ;
  }

  
  indexValue3(val : number) {
    let aux1 = val >= 6;
    let aux2 = val <= 9;
    return aux1 && aux2 ;
  }

  
  searchMovie(query: string){
    this._moviesService.searchMovie(query).subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    // this._moviesService.cache = 9;
  }

  
  verPelicula(ind: number){
    this._moviesService.getMovie(this.peliculas.results[ind]);
  this.router.navigate(['/pelicula', this.peliculas.results[ind].id]);
  }

  peliculaFoto(ind: number){

    let poster = this.resultados[ind];
   
    this.foto = poster.poster_path;

    let url = `https://image.tmdb.org/t/p/w500${this.foto}`;

    return url
  }

  navigateHome(){
    this._moviesService.cache = 1;
    this.router.navigate(['/home'])
  }

  ngOnInit() {



    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this._moviesService.searchMovie(this.termino).subscribe(data => {
        this.peliculas = data;
        this.resultados = this.peliculas.results;
        console.log(this.resultados)
      });
    })
    

  }

}
