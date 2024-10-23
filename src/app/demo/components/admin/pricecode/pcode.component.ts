import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { DecryptService } from 'src/app/demo/service/decrypt.service';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-pcode',
  providers: [MessageService, TableService],
  templateUrl: './pcode.component.html',
  styleUrl: './pcode.component.scss'
})
export class PcodeComponent {

  userManage: boolean = false;

  cities: any;

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

  submitted: boolean = false;

  addOrUpdate: boolean = false;

  rows = 10;

  pricecode_id: any;

  Users: any;

  Roles: any;

  Tables: any;

  name: any;

  phone: any;

  role: any;

  user_id: any;

  email: any;

  create: any;
  update: any;
  delete: any;

  password: any;

  Systems: any;

  Lang = [{ lang: "en" }, { lang: "mm" }];

  selectedLang: any;

  userMange: any;

  Per: any;

  constructor(private http: StService, private msgService: MessageService, private decrypt: DecryptService, private router: Router) {
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
                  let L = dat.filter((i: any) => i.task == 'Price Code');
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

    this.http.priceTag().subscribe(
      (res: any) => {
        let Role = res;
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
      this.http.allPriceCode().subscribe(
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
      this.http.allPriceCode().subscribe(
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
      one: this.one,
      two: this.two,
      three: this.three,
      four: this.four,
      five: this.five,
      six: this.six,
      seven: this.seven,
      eight: this.eight,
      nine: this.nine,
      zero: this.zero,
      active: this.selectedStatus.status,
      priceTag: this.selectedRole.CODE
    };
    console.log(obj);
    this.http.savePriceCode(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Filter Create Successfully' });
          this.productDialog = false;
          this.submitted = false;
          this.disabled = false;

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
    this.http.updatePriceCode(obj).subscribe(
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
    this.pricecode_id = obj;
  }

  confirmDelete() {
    let obj = {
      pricecode_id: this.pricecode_id
    }
    this.http.deletePriceCode(obj).subscribe(
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
    this.http.allPriceCode().subscribe(
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
