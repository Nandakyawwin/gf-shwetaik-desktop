import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  choosingColumn_id: any;

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

  create: any;
  update: any;
  delete: any;
  view: any;

  rows = 10;

  systemOption_id: any;

  Users: any;

  Roles: any;

  Tables: any;

  CC: any;

  name: any;

  phone: any;

  role: any;

  user_id: any;

  email: any;

  password: any;

  Systems: any;

  Lang = [{ lang: "en" }, { lang: "mm" }];

  selectedLang: any;

  userMange: any;

  Per: any;

  constructor(private http: StService, private msgService: MessageService, private router: Router) {
    this.http.getString('user_id').then((result) => {
      console.log(result);
      this.http.findRoleListByUserId({ user_id: Number(result) }).subscribe(
        (res: any) => {
          // console.log(res);
          res.data.map((item: any) => {
            // console.log(item);
            this.http.findPermission({ role_id: item.role.role_id }).subscribe(
              (result: any) => {
                if (result.length > 0) {
                  let dat = result.data;
                  let L = dat.filter((i: any) => i.task == 'Choosing Column');
                  console.log(L)
                  this.Per = L;
                  this.update = this.Per[0].update;
                  this.create = this.Per[0].create;
                  this.delete = this.Per[0].delete;


                  console.log(this.Per);
                  if (!this.Per[0].read) {
                    alert('You Don\'t have read access');
                    this.router.navigateByUrl('/');
                  }
                }
              }
            )
          })
        }
      )
    })
  }

  ngOnInit(): void {
    this.allCC()

    this.http.allTable().subscribe(
      (res: any) => {
        this.Tables = res.data;
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
      role_id: this.selectedRole.role_id,
      tableName: this.selectedTable.tableName,
      name: this.key
    };
    this.http.saveCC(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Create Successfully' });
          this.dialogClose("Save");
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
    let data = event.data;
    this.selectedRole = data.role;
    this.key = data.name;
    this.selectedTable = this.Tables.find(lang => lang.tableName === event.data.tableName);
    this.choosingColumn_id = data.choosingColumn_id
  };

  updateProduct() {
    this.submitted = true;
    let obj = {
      role_id: this.selectedRole.role_id,
      tableName: this.selectedTable.tableName,
      name: this.key,
      choosingColumn_id: this.choosingColumn_id
    };
    this.http.updateCC(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Filter Update Successfully' });
          this.dialogClose("Update");
        }
      }
    )
  }

  deleteProduct(obj: any) {
    this.deleteProductDialog = true;
    this.choosingColumn_id = obj;
  }

  confirmDelete() {
    let obj = {
      choosingColumn_id: this.choosingColumn_id
    }
    this.http.deleteCC(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Filter Delete Successfully' });
          this.allCC();
          this.dialogClose("Delete");
        };
      },
      (err: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(err.name), detail: 'Internet Server Error' });
      }
    )
  }

  dialogClose(type: any) {

    if (type === "Update") {

      this.submitted = false;
      this.productDialog = false;
      this.addOrUpdate = false;
      this.disabled = false;
      this.allCC();

    }
    else if (type === "Save") {

      this.productDialog = false;
      this.submitted = false;
      this.addOrUpdate = false;
      this.disabled = false;
      this.allCC();

    }
    else if (type === "Delete") {
      this.deleteProductDialog = false;
      this.productDialog = false;
      this.submitted = false;
      this.addOrUpdate = false;
      this.productDialog = false;
      this.submitted = false;
      this.addOrUpdate = false;
      this.allCC();

    }
    this.productDialog = false;
  }

  dialogError() {
    this.productDialog = true;
  }

  allCC() {
    this.http.allCC().subscribe(
      (res: any) => {
        if (res.con) {
          let System = res.data;
          this.CC = System.reverse();
        }
      },
      (err: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(err.name), detail: 'Internet Server Error' });
      }
    )
  }
}
