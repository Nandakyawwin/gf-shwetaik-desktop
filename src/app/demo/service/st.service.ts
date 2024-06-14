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

  loginUser(obj: any) {
    let url = this.BASEURL + 'login/user';
    return this.http.post(url,obj).pipe(
      map(
        response => response
      )
    )
  }
  
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

  
  // ******* SYSTEM OPTIONS *******


  allSystem() {
    return this.http.get(this.BASEURL + 'all/systemOption').pipe(
      map(
        response => response
      )
    )
  };

  saveSystem(obj: any) {
    let url = this.BASEURL + 'save/systemOption';
    return this.http.post(url,obj).pipe(
      map(
        response => response
      )
    )
  };

  updateSystem(obj: any) {
    let url = this.BASEURL + 'update/systemOption';
    return this.http.post(url,obj).pipe(
      map(
        response => response
      )
    )
  };

  deleteSystem(id: any) {
    let url = this.BASEURL + 'delete/systemOption';
    return this.http.post(url, id).pipe(
      map(
        response => response
      )
    )
  };

  searchSystem(uid: any) {
    let url = this.BASEURL + 'search/systemOption/' + uid;
    return this.http.get(url).pipe(
      map(
        response  => response
      )
    )
  }


  // ******* SYSTEM OPTIONS *******


    // ******* LANGUAGE *******


    allLanguage() {
      return this.http.get(this.BASEURL + 'all/language').pipe(
        map(
          response => response
        )
      )
    };
  
    saveLanguage(obj: any) {
      let url = this.BASEURL + 'save/language';
      return this.http.post(url,obj).pipe(
        map(
          response => response
        )
      )
    };
  
    updateLanguage(obj: any) {
      let url = this.BASEURL + 'update/language';
      return this.http.post(url,obj).pipe(
        map(
          response => response
        )
      )
    };
  
    deleteLanguage(id: any) {
      let url = this.BASEURL + 'delete/language';
      return this.http.post(url,id).pipe(
        map(
          response => response
        )
      )
    };
  
  
    // ******* LANGUAGE *******

      // ******* LANGUAGE *******


      allTable() {
        return this.http.get(this.BASEURL + 'all/table').pipe(
          map(
            response => response
          )
        )
      };
    
      saveTable(obj: any) {
        let url = this.BASEURL + 'save/table';
        return this.http.post(url,obj).pipe(
          map(
            response => response
          )
        )
      };
    
      updateTable(obj: any) {
        let url = this.BASEURL + 'update/table';
        return this.http.post(url,obj).pipe(
          map(
            response => response
          )
        )
      };
    
      deleteTable(id: any) {
        let url = this.BASEURL + 'delete/table';
        return this.http.post(url,id).pipe(
          map(
            response => response
          )
        )
      };
    
    
      // ******* LANGUAGE *******


      getList(table:any){
        let url = `http://localhost:8080/getARC.php?table=${table}`
        return this.http.get(url).pipe(
          map(
            response => response
          )
        )
      }

      addData(obj: any) {
        let url = `http://localhost:8080/add_customer.php`;
        return this.http.post(url, obj).pipe(
          map(
            response => response
          )
        )
      };

      dataSync(data:any){
        let url = 'https://st.golden-future.org/admin/add';
        return this.http.post(url,data).pipe(
          map(
            response => response
          )
        )
      }

      datafromServer(data: any) {
        let url = 'https://st.golden-future.org/admin/alldata';
        return this.http.post(url,data).pipe(
          map(
            response => response
          )
        )
      }
  
      addList(tableName:any){
        let url = this.BASEURL + tableName + '/getTable';
        return this.http.get(url).pipe(
          map(
            response => response
          )
        )
      }
}
