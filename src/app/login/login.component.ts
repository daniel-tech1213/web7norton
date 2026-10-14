import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected readonly email = signal('');
  protected readonly senha = signal('');
  protected readonly mensagem = signal('');

  entrar(): void {
    if (!this.email().trim() || !this.senha().trim()) {
      this.mensagem.set('Informe e-mail e senha.');
      return;
    }

    this.mensagem.set(`Login enviado para ${this.email().trim()}.`);
  }
}
