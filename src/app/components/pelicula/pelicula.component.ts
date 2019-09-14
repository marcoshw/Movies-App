import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  




  constructor(public _moviesService: PeliculasService, private router: Router, private _location: Location) {

    
    console.log("peli")

    console.log(this._moviesService.peiculaTemporal)
    console.log(this._moviesService.peiculaTemporal.backdrop_path)
  }
  volver(){
    this._location.back();
  }



  ngOnInit() {
  }


}
