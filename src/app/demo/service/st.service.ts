import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StService {

  BASEURL = environment.BASEURL;
  constructor(private http: HttpClient) { }

  // ******* USER *******

  allUser(){
    return this.http.get(this.BASEURL + 'all/user').pipe(
      map(
        response => response
      )
    )
  };

  saveUser(obj: any) {
    let url = this.BASEURL + 'register/user';
    return this.http.post(url,obj).pipe(
      map(
        response => response
      )
    )
  };

  updateUser(obj: any) {
    let url = this.BASEURL + 'update/user';
    return this.http.post(url,obj).pipe(
      map(
        response => response
      )
    )
  };

  deleteUser(id: any) {
    let url = this.BASEURL + 'delete/user';
    return this.http.post(url,id).pipe(
      map(
        response => response
      )
    )
  };


  // ******* USER *******

  // ******* ROLE *******

  allRole() {
    return this.http.get(this.BASEURL + 'all/role').pipe(
      map(
        response => response
      )
    )
  };

  saveRole(obj: any) {
    let url = this.BASEURL + 'save/role';
    return this.http.post(url,obj).pipe(
      map(
        response => response
      )
    )
  };

  updateRole(obj: any) {
    let url = this.BASEURL + 'update/role';
    return this.http.post(url,obj).pipe(
      map(
        response => response
      )
    )
  };

  deleteRole(id: any) {
    let url = this.BASEURL + 'delete/role';
    return this.http.post(url,id).pipe(
      map(
        response => response
      )
    )
  };

  // ******* ROLE *******

}
