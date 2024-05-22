import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StService {

  BASEURL = `http://localhost:3000/admin/superuser/`;
  constructor(private http: HttpClient) { }


  allUser(){
    return this.http.get(this.BASEURL + 'all/user').pipe(
      map(
        response => response
      )
    )
  };

  allRole() {
    return this.http.get(this.BASEURL + 'all/role').pipe(
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
  }

}
