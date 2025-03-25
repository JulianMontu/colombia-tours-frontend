import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../pages/login/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getCurrentUser();

    if (!user) {
      this.router.navigate(['/home']);
      return false;
    }

    // Obtener la ruta a la que intenta acceder
    const requestedUrl = state.url;

    // Si ya está en su ruta correcta, permite el acceso
    if (user.role === 'admin' && requestedUrl === '/users') return true;
    if (user.role === 'user' && requestedUrl === '/solicitudes') return true;

    // Si está en la ruta incorrecta, redirige y **evita el bucle**
    if (user.role === 'admin') {
      this.router.navigate(['/users'], { replaceUrl: true }); // Evita volver a ejecutar el guard
    } else if (user.role === 'user') {
      this.router.navigate(['/solicitudes'], { replaceUrl: true });
    }

    return false;
  }
}
