import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class PeliculasService {

  public peiculaTemporal: any = [];
  public cache: Number = 1;
  public data:any = [];

  private apikey:string = "6901620ad7c52885d5438b471bad8c2f";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private jsonp: HttpClientJsonpModule, private http:HttpClient ) { 
  }

  getPopulars() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
  }

  getTheaters() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url = `${ this.urlMoviedb }/movie/now_playing?api_key=${ this.apikey }&language=es&page=1`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
  }

  getNinos() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url =  `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&certification_country=US&certification.lte=G`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
  }

  getTop2019() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url =  `${ this.urlMoviedb }/discover/movie?&api_key=${ this.apikey }&primary_release_year=2019&sort_by=vote_average.desc&vote_count.gte=2000&language=es`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
    
    
  }

  getTop2018() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url =  `${ this.urlMoviedb }/discover/movie?&api_key=${ this.apikey }&primary_release_year=2018&sort_by=vote_average.desc&vote_count.gte=5000&language=es`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
  }

  getTop2017() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url =  `${ this.urlMoviedb }/discover/movie?&api_key=${ this.apikey }&primary_release_year=2017&sort_by=vote_average.desc&vote_count.gte=5000&language=es`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
  }

  getTop2016() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url =  `${ this.urlMoviedb }/discover/movie?&api_key=${ this.apikey }&primary_release_year=2016&sort_by=vote_average.desc&vote_count.gte=5000&language=es`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
  }

  getTop2015() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url =  `${ this.urlMoviedb }/discover/movie?&api_key=${ this.apikey }&primary_release_year=2015&sort_by=vote_average.desc&vote_count.gte=5000&language=es`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
  }

  searchMovie(query: string) { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url =  `${ this.urlMoviedb }/search/movie?&api_key=${ this.apikey }&language=es&query=${ query }&page=1&include_adult=false`;
    return this.http.jsonp(url, 'callback'); //jsonp para asegurar la petición a otros dominios
  }




  // movie?primary_release_year=2010&sort_by=vote_average.desc
  getMovie(matriz: any ){
    this.peiculaTemporal = matriz
    return this.peiculaTemporal;
  }

}