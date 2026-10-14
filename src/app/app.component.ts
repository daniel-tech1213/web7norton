import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraBuscaComponent } from './barra-busca/barra-busca.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';

@Component({
  selector: 'app-root',
  imports: [TopoComponent, MenuComponent, BarraBuscaComponent, RouterOutlet, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
