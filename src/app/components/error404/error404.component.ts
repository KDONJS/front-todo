import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component {
  path: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    // Opción 1: Usando el Router para obtener la URL completa
    this.path = router.url;

    // Opción 2: Usando ActivatedRoute para obtener segmentos de la ruta
    // Esto podría ser útil si necesitas partes específicas de la ruta o parámetros
    this.route.url.subscribe(segments => {
      this.path = segments.join('/');
    });
  }
}
