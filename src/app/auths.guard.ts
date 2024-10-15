import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { StService } from './demo/service/st.service';


@Injectable({
  providedIn: 'root'
})
export class DynamicGuard implements CanActivate {

  constructor(private permissionService: StService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const task = route.data['task'] as string;

    if (this.permissionService.canRead(task)) {
      return true;
    } else {
      this.router.navigate(['/access-denied']); // Redirect if no read permission
      return false;
    }
  }
}
