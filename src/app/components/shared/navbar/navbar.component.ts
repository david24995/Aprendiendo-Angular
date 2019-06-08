import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private _router:Router) { }

  buscarHeroe(buscar: String) {
    this._router.navigate(['/heroes',buscar]);
  }

}
