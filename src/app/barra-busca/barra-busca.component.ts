import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'barraBusca',
  imports: [FormsModule],
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css',
})
export class BarraBuscaComponent {
  protected readonly termo = signal('');
  protected readonly resultado = signal('');

  buscar(): void {
    const texto = this.termo().trim();
    this.resultado.set(texto ? `Busca por: ${texto}` : 'Digite algo para buscar.');
  }
}
