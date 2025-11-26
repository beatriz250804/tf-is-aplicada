import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class UsuariosPage {
  usuarios = [
    { login: 'juan123', email: 'juan@example.com' },
    { login: 'ana98', email: 'ana@example.com' },
    { login: 'luisdev', email: 'luis@example.com' }
  ];

}
