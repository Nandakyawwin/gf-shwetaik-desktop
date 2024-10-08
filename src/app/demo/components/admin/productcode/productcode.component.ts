import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { DecryptService } from 'src/app/demo/service/decrypt.service';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-productcode',
  providers: [MessageService, TableService],
  templateUrl: './productcode.component.html',
  styleUrl: './productcode.component.scss'
})
export class ProductcodeComponent {

  userManage: boolean = false;

  cities: any;

  code: any;

  qty: any;

  selectLocation: any;

  selectedCities: any;

  roleManage: boolean = false;

  languageManage: boolean = false;

  tableManage: boolean = false;

  colorManage: boolean = false;

  filterManage: boolean = false;

  tableSync: boolean = false;

  tableFetch: boolean = false;

  tableInsert: boolean = false;

  selectedProduct: any;

  selectedStatus: any;

  one: any;

  two: any;

  three: any;

  four: any;

  five: any;

  six: any;

  seven: any;

  eight: any;

  nine: any;

  zero: any;

  role_id: any;

  i = false;

  first: any = 0;

  active = [
    { status: true }, { status: false }
  ]

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

  location: any;

  submitted: boolean = false;

  addOrUpdate: boolean = false;

  rows = 10;

  Product_Code_id: any;

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

  userMange: any;

  constructor(private http: StService, private msgService: MessageService, private decrypt: DecryptService) {
  }



  ngOnInit(): void {

    this.allList();
    this.http.allUser().subscribe(
      (res: any) => {
        let User = res.data;
        this.Users = User.reverse();
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )

    this.http.location().subscribe(
      (res: any) => {
        let User = res;
        this.location = User.reverse();
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
        this.cities = Table;
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
    }
  }

  hideDialog() {

    this.productDialog = false;
    this.submitted = false;
    this.addOrUpdate = false;
  }

  statusA() {
    this.i = !this.i;
    if (this.i) {
      this.http.allProductCode().subscribe(
        (res: any) => {
          let s = res.data;
          let d = s.reverse();
          let k = d.filter(item => item.active);
          this.Systems = k
        },
        (error: any) => {
          this.error(error, false);
        }
      )
    } else {
      this.http.allProductCode().subscribe(
        (res: any) => {
          let s = res.data;
          this.Systems = s.reverse();
        },
        (error: any) => {
          this.error(error, false);
        }
      )
    }
  }

  saveProduct() {

    this.disabled = true;
    this.submitted = true;

    let obj = {
      code: String(this.code),
      location: {
        CODE: this.selectLocation.CODE,
        DESCRIPTION: this.selectLocation.DESCRIPTION
      },
      QTY: this.qty,
      role_id: this.selectedRole.role_id
    };
    console.log(obj);
    this.http.saveProductCode(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Filter Create Successfully' });
          this.productDialog = false;
          this.submitted = false;
          this.disabled = false;
          this.code = '';
          this.selectLocation = '';
          this.qty = '';
          this.selectedRole = '';

          this.allList();
        }
      },
      (err: any) => {
        this.error(err, false);
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
    this.http.updateProductCode(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.error(res, true);
          this.selectedRole = '';
          this.selectedUsers = '';
          this.selectedTable = '';
          this.value = '';
          this.key = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.allList();
        }
      }
    )
  }

  deleteProduct(obj: any) {
    this.deleteProductDialog = true;
    this.Product_Code_id = obj;
  }

  confirmDelete() {
    let obj = {
      Product_Code_id: this.Product_Code_id
    }
    console.log(obj)
    this.http.deleteProductCode(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.error(res, true);
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
          this.allList();
        };
      },
      (err: any) => {
        this.error(err, false);
      }
    )
  }


  allList() {
    this.http.allProductCode().subscribe(
      (res: any) => {
        let s = res.data;
        this.Systems = s.reverse();
      },
      (error: any) => {
        this.error(error, false);
      }
    )
  }

  error(e: any, status: any) {
    if (status == true) {
      this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Successfully' });
    } else {
      this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(e.name), detail: 'Internet Server Error' })
    }
  }
}
