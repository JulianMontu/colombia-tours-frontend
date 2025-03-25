import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'assets/users.json'; // Ruta del archivo JSON
  private sessionKey = 'currentUser';
  private users: any[] = [];

  constructor(private http: HttpClient,private router: Router) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get<any[]>(this.usersUrl).pipe(
      catchError(() => of([])) // Si hay un error, retorna un array vacío
    ).subscribe(data => {
      this.users = data;
    });
  }

  // Registrar un nuevo usuario (NO se guardará en el JSON)
  register(email: string, password: string, role: string): boolean {
    if (this.users.some(user => user.email === email)) {
      return false; // Usuario ya existe
    }

    const newUser = {
      id: this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1,
      email,
      password,
      role
    };

    this.users.push(newUser);
    localStorage.setItem(this.sessionKey, JSON.stringify(newUser));
    return true; // Pero NO se guardará en el archivo JSON
  }

  // Iniciar sesión
  login(email: string, password: string): boolean {
    let user;
    let userSesion = JSON.parse(localStorage.getItem(this.sessionKey) || '[]');
    if(userSesion.length > 0){
      user = userSesion.find((u: any) => u.email === email && u.password === password);
    }else{
       user = this.users.find(u => u.email === email && u.password === password);
    }
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
    this.router.navigate(['/home']);
  }

  // Verificar si hay sesión activa
  isAuthenticated(): boolean {
    return localStorage.getItem(this.sessionKey) !== null;
  }

  // Obtener el rol del usuario autenticado
  getUserRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }
}
