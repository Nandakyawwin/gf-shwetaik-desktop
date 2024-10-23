import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StService {

  BASEURL = environment.BASEURL;
  permissions: any;
  task = [
    { list: 'User' },
    { list: 'Role' },
    { list: 'Choosing Column' },
    { list: 'Transfer' },
    { list: 'Price Code' },
    { list: 'Team Code' },
    { list: 'Table' },
    { list: 'Language' },
    { list: 'Permission' },
    { list: 'Stock-Mobile' },
    { list: 'Login-Mobile' },
    { list: 'QR-Mobile' },
    { list: 'Search-Mobile' },
    { list: 'Transfer-Mobile' },
    { list: 'Transfer-Approve-Mobile' },
    { list: 'Password-Change-Mobile' },
  ]
  constructor(private http: HttpClient) { }


  findPermission(role_id) {
    let url = this.BASEURL + 'find/permission';
    return this.http.post(url, role_id).pipe(
      map(data => data)
    )
  }

  updatePermission(obj) {
    let url = this.BASEURL + 'update/permission';
    return this.http.post(url, obj).pipe(
      map(data => data)
    )
  }

  savePermission(obj) {
    let url = this.BASEURL + 'save/permission';
    return this.http.post(url, obj).pipe(
      map(data => data)
    )
  }

  // Store permissions
  setPermissions(permissions: any[]): void {
    permissions.forEach(permission => {
      this.permissions[permission.task.toLowerCase()] = permission;
    });
  }

  // Retrieve permissions for a specific task
  getPermissionsForTask(task: string): any {
    return this.permissions[task.toLowerCase()];
  }

  // Check specific actions based on task
  canRead(task: string): boolean {
    return this.permissions[task.toLowerCase()]?.read;
  }

  canCreate(task: string): boolean {
    return this.permissions[task.toLowerCase()]?.create;
  }

  canUpdate(task: string): boolean {
    return this.permissions[task.toLowerCase()]?.update;
  }

  canDelete(task: string): boolean {
    return this.permissions[task.toLowerCase()]?.delete;
  }

  // Choosing Columns

  allCC() {
    return this.http.get(this.BASEURL + 'all/CC').pipe(
      map(data => data)
    )
  }

  saveCC(obj: any) {
    let url = this.BASEURL + 'save/CC';
    return this.http.post(url, obj).pipe(
      map(
        res => res
      )
    )
  }

  updateCC(obj: any) {
    let url = this.BASEURL + 'update/CC';
    return this.post(url, obj).pipe(
      map(
        res => res
      )
    )
  }

  deleteCC(id: any) {
    let url = this.BASEURL + 'delete/CC';
    return this.post(url, id);
  }

  allLists() {
    let url = this.BASEURL + 'all/list';
    return this.get(url);
  }

  allTransfer() {
    let url = this.BASEURL + 'all/transfer';
    return this.get(url);
  }

  updateList(obj) {
    let url = this.BASEURL + 'update/list';
    return this.post(url, obj);
  }

  saveLists(obj) {
    let url = this.BASEURL + 'save/list';
    return this.post(url, obj);
  }

  deleteList(id) {
    let url = this.BASEURL + 'delete/list';
    return this.post(url, id);
  }
  // ******* USER *******

  allUser() {
    return this.http.get(this.BASEURL + 'all/user').pipe(
      map(
        response => response
      )
    )
  };

  findRoleListByUserId(id: any) {
    let url = this.BASEURL + 'find/roleList';
    return this.http.post(url, id).pipe(
      map(
        response => response
      )
    )
  }

  allUserV1() {
    return this.http.get(this.BASEURL + 'api/v_1/all/user').pipe(
      map(
        response => response
      )
    )
  };

  saveRoleList(obj: any) {
    let url = this.BASEURL + 'save/roleList';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  }

  deleteRoleList(id: any) {
    let url = this.BASEURL + 'delete/roleList';
    return this.http.post(url, id).pipe(
      map(
        response => response
      )
    )
  }

  loginUser(obj: any) {
    let url = this.BASEURL + 'login/user';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  }

  saveUser(obj: any) {
    let url = this.BASEURL + 'register/user';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  updateUser(obj: any) {
    let url = this.BASEURL + 'update/user';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  deleteUser(id: any) {
    let url = this.BASEURL + 'delete/user';
    return this.http.post(url, id).pipe(
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
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  updateRole(obj: any) {
    let url = this.BASEURL + 'update/role';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  deleteRole(id: any) {
    let url = this.BASEURL + 'delete/role';
    return this.http.post(url, id).pipe(
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
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  updateSystem(obj: any) {
    let url = this.BASEURL + 'update/systemOption';
    return this.http.post(url, obj).pipe(
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
        response => response
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
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  updateLanguage(obj: any) {
    let url = this.BASEURL + 'update/language';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  deleteLanguage(id: any) {
    let url = this.BASEURL + 'delete/language';
    return this.http.post(url, id).pipe(
      map(
        response => response
      )
    )
  };


  // ******* LANGUAGE *******

  // ******* TABLE *******


  allTable() {
    return this.http.get(this.BASEURL + 'all/table').pipe(
      map(
        response => response
      )
    )
  };

  saveTable(obj: any) {
    let url = this.BASEURL + 'save/table';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  updateTable(obj: any) {
    let url = this.BASEURL + 'update/table';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  deleteTable(id: any) {
    let url = this.BASEURL + 'delete/table';
    return this.http.post(url, id).pipe(
      map(
        response => response
      )
    )
  };


  // ******* TABLE *******

  // ******* FILTER *******


  allFilter() {
    return this.http.get(this.BASEURL + 'all/filter').pipe(
      map(
        response => response
      )
    )
  };

  saveFilter(obj: any) {
    let url = this.BASEURL + 'save/filter';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  updateFilter(obj: any) {
    let url = this.BASEURL + 'update/filter';
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  deleteFilter(id: any) {
    let url = this.BASEURL + 'delete/filter';
    return this.http.post(url, id).pipe(
      map(
        response => response
      )
    )
  };


  // ******* FILTER *******


  getList(table: any, port: any) {
    let url = `http://localhost${port}/getARC.php?table=${table}`
    return this.http.get(url).pipe(
      map(
        response => response
      )
    )
  }

  addData(obj: any, port: any) {
    let url = `http://localhost${port}/add_customer.php`;
    return this.http.post(url, obj).pipe(
      map(
        response => response
      )
    )
  };

  dataSync(data: any) {
    let url = 'https://st.golden-future.org/admin/add';
    return this.http.post(url, data).pipe(
      map(
        response => response
      )
    )
  }

  datafromServer(data: any) {
    let url = 'https://st.golden-future.org/admin/alldata';
    return this.http.post(url, data).pipe(
      map(
        response => response
      )
    )
  }

  addList(tableName: any) {
    let url = this.BASEURL + tableName + '/getTable';
    return this.http.get(url).pipe(
      map(
        response => response
      )
    )
  }

  getString(key: string): Promise<string | null> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Storage.get({ key });
        resolve(result.value);
      } catch (error) {
        reject(error);
      }
    });
  }

  setString(key: string, value: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await Storage.set({ key, value });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  removeString(key: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await Storage.remove({ key });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  post(url: any, obj: any) {
    return this.http.post(url, obj).pipe(
      map(
        res => res
      )
    )
  }

  get(url: any) {
    return this.http.get(url).pipe(
      map(
        res => res
      )
    )
  }

  allDataTable(url: any) {
    let urls = `https://st.golden-future.org/table/ss/${url}`;
    return this.http.get(urls).pipe(
      map(
        res => res
      )
    )
  }


  allProductCode() {
    let url = this.BASEURL + 'all/productCode';
    return this.get(url);
  }

  updateProductCode(obj) {
    let url = this.BASEURL + 'update/productCode';
    return this.post(url, obj);
  }

  saveProductCode(obj) {
    let url = this.BASEURL + 'save/productCode';
    return this.post(url, obj);
  }

  deleteProductCode(id) {
    let url = this.BASEURL + 'delete/productCode';
    return this.post(url, id);
  }

  allTeamCode() {
    let url = this.BASEURL + 'all/teamCode';
    return this.get(url);
  }

  updateTeamCode(obj) {
    let url = this.BASEURL + 'update/teamCode';
    return this.post(url, obj);
  }

  saveTeamCode(obj) {
    let url = this.BASEURL + 'save/teamCode';
    return this.post(url, obj);
  }

  deleteTeamCode(id) {
    let url = this.BASEURL + 'delete/teamCode';
    return this.post(url, id);
  }


  allPriceCode() {
    let url = this.BASEURL + 'all/pcode';
    return this.get(url);
  }

  updatePriceCode(obj) {
    let url = this.BASEURL + 'update/pcode';
    return this.post(url, obj);
  }

  savePriceCode(obj) {
    let url = this.BASEURL + 'save/pcode';
    return this.post(url, obj);
  }

  deletePriceCode(id) {
    let url = this.BASEURL + 'delete/pcode';
    return this.post(url, id);
  }

  location() {
    let url = 'https://st.golden-future.org/table/ss/ST_LOCATION';
    return this.get(url);
  }

  priceTag() {
    let url = 'https://st.golden-future.org/table/ss/ST_PRICETAG';
    return this.get(url);
  }

}
