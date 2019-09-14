import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  constructor(public _moviesService: PeliculasService,  private router: Router) { }


  ngOnInit() {
  }

  buscarMov(termino: string) {
    //    console.log(termino);
      this.router.navigate(['/buscar', termino]);
      }

}
