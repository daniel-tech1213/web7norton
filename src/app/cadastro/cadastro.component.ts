import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  protected readonly nome = signal('');
  protected readonly email = signal('');
  protected readonly senha = signal('');
  protected readonly mensagem = signal('');

  cadastrar(): void {
    if (!this.nome().trim() || !this.email().trim() || !this.senha().trim()) {
      this.mensagem.set('Preencha nome, e-mail e senha.');
      return;
    }

    this.mensagem.set(`Cadastro enviado para ${this.nome().trim()}.`);
  }
}
