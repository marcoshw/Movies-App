import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  indice2 :number[] = new Array(9);
  @Input() indice: number;

  peliculas: any = {};
  resultados: any = [];
  probando2: any = [];
  foto: any = {};





  constructor(public _moviesService: PeliculasService, private router: Router) {




 

  if (this._moviesService.cache == 1){
    this._moviesService.getPopulars().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
  }

  if (this._moviesService.cache == 2){
    this._moviesService.getTheaters().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;

      console.log(this.resultados)
    })
  }

  if (this._moviesService.cache == 3){
    this._moviesService.getNinos().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
  }

  if (this._moviesService.cache == 4){
    this._moviesService.getTop2019().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
  }

  if (this._moviesService.cache == 5){
    this._moviesService.getTop2018().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
  }

  if (this._moviesService.cache == 6){
    this._moviesService.getTop2017().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
  }

  if (this._moviesService.cache == 7){
    this._moviesService.getTop2016().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
  }

  if (this._moviesService.cache == 8){
    this._moviesService.getTop2015().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
  }



  }

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



  cambioPopulares(){
    this._moviesService.getPopulars().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    this._moviesService.cache = 1;
  }

  cambioTeatro(){
    this._moviesService.getTheaters().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })

    this._moviesService.cache = 2;
  }

  cambioNinos(){
    this._moviesService.getNinos().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    this._moviesService.cache = 3;
  }

  cambio2019(){
    this._moviesService.getTop2019().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    this._moviesService.cache = 4;
  }

  cambio2018(){
    this._moviesService.getTop2018().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    this._moviesService.cache = 5;
  }

  cambio2017(){
    this._moviesService.getTop2017().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    this._moviesService.cache = 6;
  }

  cambio2016(){
    this._moviesService.getTop2016().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    this._moviesService.cache = 7;
  }

  cambio2015(){
    this._moviesService.getTop2015().subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    this._moviesService.cache = 8;
  }

  searchMovie(query: string){
    this._moviesService.searchMovie(query).subscribe(data => {
      this.peliculas = data;
      this.resultados = this.peliculas.results;
      console.log(this.resultados)
    })
    this._moviesService.cache = 9;
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




  

  ngOnInit() {

    
  
}

}