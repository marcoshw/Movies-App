import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="page-footer font-small blue background">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3 colortexto">Movies App por
    <a href=""> Marcos Hernández W.</a>
  </div>
  <!-- Copyright -->

</footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}