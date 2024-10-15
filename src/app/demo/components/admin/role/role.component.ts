import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-role',
  providers: [MessageService, TableService],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss'
})
export class RoleComponent {

  selectedProduct: any;

  role_id: any;

  roleid: any;

  sole = false;

  first: any = 0;

  userName: any;

  roleName: any;

  disabled: boolean = false;

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  CRUD: any;

  formGroup: any;

  selectedRole: any;

  submitted: boolean = false;

  addOrUpdate: boolean = false;

  editDialog = false;

  rows = 10;

  Users: any;

  Roles: any;

  name: any;

  phone: any;

  role: any;

  user_id: any;

  email: any;

  password: any;

  userMange: any;

  constructor(private http: StService, private msgService: MessageService) { }



  ngOnInit(): void {

    this.http.allRole().subscribe(
      (res: any) => {
        let Roles = res.data;
        this.Roles = Roles.reverse();
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
      this.roleName = '';
      this.role_id = '';
    }
  }

  hideDialog() {

    this.productDialog = false;
    this.submitted = false;
    this.roleName = '';
    this.role_id = '';
  }

  saveProduct() {

    this.disabled = true;
    this.submitted = true;

    let obj = {
      roleName: this.roleName,
    };

    this.http.saveRole(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'User Create Successfully' });
          this.roleName = '';
          this.role_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.disabled = false;

          this.http.allRole().subscribe(
            (res: any) => {
              let Roles = res.data;
              this.Roles = Roles.reverse();
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

  back() {
    this.sole = !this.sole;
  }

  onRowSelect(event: any) {
    this.sole = !this.sole;
    console.log(event)
    this.roleid = event.data.role_id;
    this.http.findPermission({ role_id: event.data.role_id }).subscribe(
      (res: any) => {
        console.log(res);
        if (res.con) {
          this.CRUD = res.data;
        }
      }
    )
  };


  onUpdateChange(role: any) {
    console.log('Update status changed for role:', role);
    this.http.updatePermission(role).subscribe(
      (res: any) => {
        if (res.con) {
          this.http.findPermission({ role_id: this.roleid }).subscribe(
            (res: any) => {
              console.log(res);
              if (res.con) {
                this.CRUD = res.data;
              }
            }
          )
        }
      }
    )
  }

  editProduct(event: any) {
    this.editDialog = true;
    this.addOrUpdate = true;
    this.roleName = event.roleName;
    this.role_id = event.role_id;
  }

  onRowUnselect(event: any) {
    console.log(event);
  };

  updateProduct() {

    this.submitted = true;

    let obj = {
      roleName: this.roleName,
      role_id: this.role_id
    };

    this.http.updateRole(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Role Update Successfully' });

          this.roleName = '';
          this.role_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allRole().subscribe(
            (res: any) => {
              if (res.con) {
                let Role = res.data;
                this.Roles = Role.reverse();
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
    this.role_id = obj;
  }

  confirmDelete() {
    let obj = {
      role_id: this.role_id
    }
    this.http.deleteRole(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Role Delete Successfully' });
          this.deleteProductDialog = false;
          this.roleName = '';
          this.role_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allRole().subscribe(
            (res: any) => {
              if (res.con) {
                let Roles = res.data;
                this.Roles = Roles.reverse();
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
