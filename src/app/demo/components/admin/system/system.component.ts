import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-system',
  providers: [MessageService,TableService],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent {

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

  submitted: boolean = false;

  addOrUpdate: boolean = false;

  rows = 10;

  systemOption_id: any;

  Users: any;

  Roles: any;

  name: any;

  phone: any;

  role: any;

  user_id: any;

  email: any;

  password: any;

  Systems: any;

  Lang = [{ lang: "en" }, { lang: "mm" }];

  selectedLang: any;

  constructor(private http: StService,private msgService: MessageService) { }



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

    this.http.allSystem().subscribe(
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
      this.selectedUsers = '';
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
        user_id : this.selectedUsers.user_id,
      userManage: this.userManage,
      roleManage: this.roleManage,
      languageManage: this.languageManage,
      tableManage: this.tableManage,
      colorManage: this.colorManage,
      filterManage: this.filterManage,
      tableSync: this.tableSync,
      tableFetch: this.tableFetch,
      tableInsert: this.tableInsert,
      lang: this.selectedLang.lang

    };

    this.http.saveSystem(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'System Option Create Successfully' });
          this.selectedRole = '';
          this.selectedUsers = '';
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

          this.http.allSystem().subscribe(
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
    this.userManage = event.data.userManage;
    this.selectedUsers = this.Users.find(user => user.user_id == event.data.user_id);
    this.roleManage = event.data.roleManage;
    this.languageManage = event.data.languageManage;
    this.tableManage = event.data.tableManage;
    this.colorManage = event.data.colorManage;
    this.filterManage = event.data.filterManage;
    this.tableSync = event.data.tableSync;
    this.tableFetch = event.data.tableFetch;
    this.tableInsert = event.data.tableInsert;
    this.systemOption_id = event.data.systemOption_id;
    this.selectedLang = this.Lang.find(lang=> lang.lang === event.data.lang);
  };

  updateProduct() {

    this.submitted = true;

    let obj = {
      roleName: this.selectedRole.roleName,
      userManage: this.userManage,
        user_id : this.selectedUsers.user_id,
      roleManage: this.roleManage,
      languageManage: this.languageManage,
      tableManage: this.tableManage,
      colorManage: this.colorManage,
      filterManage: this.filterManage,
      tableSync: this.tableSync,
      tableFetch: this.tableFetch,
      tableInsert: this.tableInsert,
      systemOption_id: this.systemOption_id,
      lang: this.selectedLang.lang
    };
    this.http.updateSystem(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'System Option Update Successfully' });
          this.selectedRole = '';
          this.selectedUsers = '';
          this.userManage = false;
          this.roleManage = false;
          this.languageManage = false;
          this.tableManage = false;
          this.colorManage = false;
          this.filterManage = false;
          this.tableSync = false;
          this.tableFetch = false;
          this.tableInsert = false;
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

          this.http.allSystem().subscribe(
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
    this.http.deleteSystem(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'System Option Delete Successfully' });
          this.deleteProductDialog = false;
          this.selectedRole = '';
          this.selectedUsers = '';
          this.userManage = false;
          this.roleManage = false;
          this.languageManage = false;
          this.tableManage = false;
          this.colorManage = false;
          this.filterManage = false;
          this.tableSync = false;
          this.tableFetch = false;
          this.tableInsert = false;
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
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allSystem().subscribe(
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
