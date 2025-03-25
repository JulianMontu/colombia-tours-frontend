import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'users';
  private sessionKey = 'currentUser';

  constructor() {
    // Si no hay usuarios en localStorage, inicializar con un usuario de prueba
    if (!localStorage.getItem(this.usersKey)) {
      const defaultUsers = [
        { id: 1, email: 'admin@example.com', password: 'admin123' },
        { id: 2, email: 'user@example.com', password: 'user123' }
      ];
      localStorage.setItem(this.usersKey, JSON.stringify(defaultUsers));
    }
  }

  // Registrar un nuevo usuario
  register(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');

    // Verificar si el usuario ya existe
    if (users.some((u: any) => u.email === email)) {
      return false; // Usuario ya registrado
    }

    // Crear un nuevo usuario con un ID único
    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      email,
      password
    };

    users.push(newUser);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

  // Iniciar sesión
  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem(this.sessionKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Obtener el usuario actual
  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem(this.sessionKey) || 'null');
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem(this.sessionKey);
  }

  // Verificar si hay sesión activa
  isAuthenticated(): boolean {
    return localStorage.getItem(this.sessionKey) !== null;
  }
}
