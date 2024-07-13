import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-filter',
  providers: [MessageService, TableService],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  userManage: boolean = false;

  roleManage: boolean = false;

  languageManage: boolean = false;

  tableManage: boolean = false;

  colorManage: boolean = false;

  filterManage: boolean = false;

  tableSync: boolean = false;

  tableFetch: boolean = false;

  tableInsert: boolean = false;

  selectedProduct: any;

  role_id: any;

  first: any = 0;

  userName: any;

  roleName: any;

  selectedUsers: any;

  disabled: boolean = false;

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  formGroup: any;

  selectedRole: any;

  selectedTable: any;

  key: any;

  filterID: any;

  value: any;

  submitted: boolean = false;

  addOrUpdate: boolean = false;

  rows = 10;

  systemOption_id: any;

  Users: any;

  Roles: any;

  Tables: any;

  name: any;

  phone: any;

  role: any;

  user_id: any;

  email: any;

  password: any;

  Systems: any;

  Lang = [{ lang: "en" }, { lang: "mm" }];

  selectedLang: any;

  constructor(private http: StService, private msgService: MessageService) { }



  ngOnInit(): void {


    this.http.allUser().subscribe(
      (res: any) => {
        let User = res.data;
        this.Users = User.reverse();
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )

    this.http.allFilter().subscribe(
      (res: any) => {
        let System = res.data;
        this.Systems = System.reverse();
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )

    this.http.allRole().subscribe(
      (res: any) => {
        let Role = res.data;
        this.Roles = Role.reverse();
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )

    this.http.allTable().subscribe(
      (res: any) => {
        let Table = res.data;
        this.Tables = Table.reverse();
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )

  }

  showErrorViaToast() {
    this.msgService.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }

  pageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }

  openDialog() {
    if (this.productDialog == false) {
      this.productDialog = true;
      this.addOrUpdate = false;
      this.selectedRole = '';
      this.selectedTable = '';
      this.selectedUsers = '';
      this.key = '';
      this.value = '';
      this.userManage = false;
      this.roleManage = false;
      this.languageManage = false;
      this.tableManage = false;
      this.colorManage = false;
      this.filterManage = false;
      this.tableSync = false;
      this.tableFetch = false;
      this.tableInsert = false;
    }
  }

  hideDialog() {

    this.productDialog = false;
    this.submitted = false;
    this.roleName = '';
    this.key = '';
    this.value = '';
    this.selectedTable = '';
    this.userManage = false;
    this.roleManage = false;
    this.languageManage = false;
    this.tableManage = false;
    this.colorManage = false;
    this.filterManage = false;
    this.tableSync = false;
    this.tableFetch = false;
    this.tableInsert = false;
    this.productDialog = false;
    this.submitted = false;
    this.addOrUpdate = false;
  }

  saveProduct() {

    this.disabled = true;
    this.submitted = true;

    let obj = {
      roleName: this.selectedRole.roleName,
      user_id: this.selectedUsers.user_id,
      tableName: this.selectedTable.tableName,
      value: this.value,
      key: this.key
    };
    this.http.saveFilter(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Filter Create Successfully' });
          this.selectedRole = '';
          this.selectedUsers = '';
          this.selectedTable = '';
          this.value = '';
          this.key = '';
          this.userManage = false;
          this.roleManage = false;
          this.languageManage = false;
          this.tableManage = false;
          this.colorManage = false;
          this.filterManage = false;
          this.tableSync = false;
          this.tableFetch = false;
          this.tableInsert = false;
          this.productDialog = false;
          this.submitted = false;
          this.disabled = false;

          this.http.allFilter().subscribe(
            (res: any) => {
              let System = res.data;
              this.Systems = System.reverse();
            },
            (error: any) => {
              this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
            }
          )
        }
      },
      (err: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(err.name), detail: 'Internet Server Error' });
        this.disabled = false;
      }
    )
  };

  onRowSelect(event: any) {
    this.productDialog = true;
    this.addOrUpdate = true;
    this.selectedRole = this.Roles.find(role => role.roleName === event.data.roleName);
    this.selectedTable = this.Tables.find(table => table.tableName === event.data.tableName);
    this.selectedUsers = this.Users.find(user => user.user_id == event.data.user_id);
    this.value = event.data.value;
    this.key = event.data.key
    this.filterID = event.data.filter_id;
  };

  updateProduct() {

    this.submitted = true;

    let obj = {
      roleName: this.selectedRole.roleName,
      user_id: this.selectedUsers.user_id,
      tableName: this.selectedTable.tableName,
      value: this.value,
      key: this.key
    };
    this.http.updateFilter(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Filter Update Successfully' });
          this.selectedRole = '';
          this.selectedUsers = '';
          this.selectedTable = '';
          this.value = '';
          this.key = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;

          this.http.allFilter().subscribe(
            (res: any) => {
              if (res.con) {
                let System = res.data;
                this.Systems = System.reverse();
              }
            },
            (err: any) => {
              this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(err.name), detail: 'Internet Server Error' });
            }
          )
        }
      }
    )
  }

  deleteProduct(obj: any) {
    this.deleteProductDialog = true;
    this.systemOption_id = obj;
  }

  confirmDelete() {
    let obj = {
      systemOption_id: this.systemOption_id
    }
    this.http.deleteFilter(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Filter Delete Successfully' });
          this.deleteProductDialog = false;
          this.selectedRole = '';
          this.selectedUsers = '';
          this.selectedTable = '';
          this.key = '';
          this.value = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allFilter().subscribe(
            (res: any) => {
              if (res.con) {
                let System = res.data;
                this.Systems = System.reverse();
              }
            },
            (err: any) => {
              this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(err.name), detail: 'Internet Server Error' });
            }
          )
        };
      },
      (err: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(err.name), detail: 'Internet Server Error' });
      }
    )
  }
}
