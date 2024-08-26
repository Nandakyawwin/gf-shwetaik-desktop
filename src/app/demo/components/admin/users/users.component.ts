import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [MessageService,TableService]
})
export class UsersComponent implements OnInit{

  selectedProduct: any;

  first: any = 0;

  lang:any;

  Lang = [{ lang: "en" }, { lang: "mm" }];

  userName: any;

  disabled: boolean = false;

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  selectedLang: any;

  formGroup: any;

  selectedRole: any;

  submitted: boolean = false;

  addOrUpdate: boolean = false;

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

  constructor(private http: StService,private msgService: MessageService) { }



  ngOnInit(): void {

    this.http.allUser().subscribe(
      (response: any) => {
        let Users = response.data;
        this.Users = Users.reverse();
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )

   this.http.allUserV1().subscribe(
       (res:any)=>{
           // console.log(res);
      }
   )

    this.http.allRole().subscribe(
      (res: any) => {
        this.Roles = res.data;
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )
  }


  ionViewWillEnter(): void {
    this.http
    .getString('user_id')
    .then((result) => {
      this.http.searchSystem(result).subscribe(
        (res: any) => {
          let ress = res.data.reverse();
          this.userMange = ress[0].userManage;

        },
        (error: any) => {
          this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
        }
      )
    })
    .catch((error) => {
      console.log(error);
    });

    this.http.allUser().subscribe(
      (response: any) => {
        let Users = response.data;
        this.Users = Users.reverse();
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )

    this.http.allRole().subscribe(
      (res: any) => {
        this.Roles = res.data;
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )
  }

  openDialog() {
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
    this.name = '';
    this.email = '';
    this.phone = '';
    this.selectedRole = '';
    this.password = '';
    this.userName = '';
    this.user_id = '';
  }

  saveProduct() {
    this.disabled = true;
    this.submitted = true;

    let obj = {
      name: this.name,
      email: this.email,
      password: this.password,
      role_id: this.selectedRole.role_id,
      phone: this.phone,
      lang: this.lang
    };

    this.http.saveUser(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'User Create Successfully' });
          this.name = '';
          this.email = '';
          this.phone = '';
          this.selectedRole = '';
          this.password = '';
          this.productDialog = false;
          this.submitted = false;
          this.disabled = false;

          this.http.allUser().subscribe(
            (response: any) => {
              let Users = response.data;
              this.Users = Users.reverse();
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
    console.log(event)
    this.productDialog = true;
    this.addOrUpdate = true;
    this.name = event.data.name;
    this.email = event.data.email;
    this.selectedRole = event.data.role;
    this.phone = event.data.phone;
    this.selectedLang = this.Lang.find(lang=> lang.lang === event.data.lang);
    this.userName = event.data.userName;
    this.user_id = event.data.user_id;
  };

  onRowUnselect(event: any) {
  console.log(event);
  };

  updateProduct() {

    this.submitted = true;

    let obj = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      role_id: this.selectedRole.role_id,
      userName: this.userName,
      user_id: this.user_id,
      lang: this.selectedLang.lang
    };

    console.log(obj)

    this.http.updateUser(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'User Update Successfully' });

          this.name = '';
          this.email = '';
          this.phone = '';
          this.selectedRole = '';
          this.user_id = '';
          this.password = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allUser().subscribe(
            (res: any) => {
              if (res.con) {
                let Users = res.data;
                this.Users = Users.reverse();
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
    this.user_id = obj;
  }

  confirmDelete() {
    let obj = {
      user_id: this.user_id
    }
    this.http.deleteUser(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'User Delete Successfully' });
          this.deleteProductDialog = false;
          this.name = '';
          this.email = '';
          this.phone = '';
          this.selectedRole = '';
          this.user_id = '';
          this.password = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allUser().subscribe(
            (res: any) => {
              if (res.con) {
                let Users = res.data;
                this.Users = Users.reverse();
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
