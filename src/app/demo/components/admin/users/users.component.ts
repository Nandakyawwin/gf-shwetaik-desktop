import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [MessageService, TableService]
})
export class UsersComponent implements OnInit {

  selectedProduct: any;

  create: any;
  update: any;
  delete: any;
  view: any;

  first: any = 0;

  roleLists: any;

  lang: any;

  Lang = [{ lang: "en" }, { lang: "mm" }];

  userName: any;

  disabled: boolean = false;

  productDialog: boolean = false;

  detailDialog: boolean = false;

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

  userofroleList: any;

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
                  let L = dat.filter((i: any) => i.task == 'User');
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

    this.http
      .getString('user_id')
      .then((result) => {
        this.http.findRoleListByUserId({ user_id: result }).subscribe(
          (res: any) => {
            console.log(res);
            if (res.con) {
              let roleList = res.data;
              this.userofroleList = roleList
            }
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

    this.http.allUserV1().subscribe(
      (res: any) => {
        // console.log(res);
      }
    )

    this.http.allRole().subscribe(
      (res: any) => {
        this.Roles = res.data;
        console.log(this.Roles);
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
        console.log(this.Roles);
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )
  }

  openDialog() {
    this.productDialog = true;
    this.name = '';
    this.email = '';
    this.phone = '';
    this.selectedRole = '';
    this.password = '';
    this.userName = '';
    this.user_id = '';
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


  onRoleChange(event: any) {
    console.log(event)
    const newSelection = event.value; // Current selection from the multi-select
    let fil = this.roleLists.map((roleList: any) => roleList.role_id); // Extract role_ids from roleLists

    let data = this.Roles.filter((role: any) => fil.includes(role.role_id)); // Get the selected roles from the list

    // Detect deselected roles
    const deselectedRoles = data.filter((role: any) => !newSelection.includes(role));

    // Detect newly selected roles (roles in newSelection but not in current roleLists)
    const selectedRoles = newSelection.filter((role: any) => !fil.includes(role.role_id));

    // Handle deselected roles
    if (deselectedRoles.length > 0) {
      let id = this.roleLists.filter((id: any) => id.role_id == deselectedRoles[0].role_id);
      console.log('Deselected roleList_id:', id[0].roleList_id);

      let ids = {
        roleList_id: id[0].roleList_id
      };

      this.http.deleteRoleList(ids).subscribe(
        (res: any) => {
          console.log('Role removed:', res);
          // window.location.reload();
          // Optionally update roleLists here after deletion
        },
        (error: any) => {
          console.error('Error deleting role:', error);
          // window.location.reload();
        }
      );
    }

    // Handle selected roles
    if (selectedRoles.length > 0) {
      console.log('Newly selected role:', selectedRoles[0]);

      this.http
        .getString('user_id')
        .then((result) => {
          let newRole = {
            user_id: this.user_id, // Assuming you have the userId in the component
            role_id: selectedRoles[0].role_id
          };

          this.http.saveRoleList(newRole).subscribe(
            (res: any) => {
              console.log('Role added:', res);
              window.location.reload();
              // Optionally update roleLists here after addition
            },
            (error: any) => {
              console.error('Error adding role:', error);
              window.location.reload();
            }
          );
          // if (event.value.length < 2) {
          //   let obj = {
          //     user_id: Number(result),
          //     role_id: event.value[0].role_id
          //   }
          //   this.http.saveRoleList(obj).subscribe(
          //     (res: any) => {
          //       console.log(res)
          //     }
          //   )
          // } else if (event.value.length > 1) {
          //   let obj = {
          //     user_id: Number(Number(result)),
          //     role_id: event.value[event.value.length - 1].role_id
          //   }
          //   this.http.saveRoleList(obj).subscribe(
          //     (res: any) => {
          //       console.log(res)
          //     }
          //   )
          // }
        })
        .catch((error) => {
          console.log(error);
        });

    }

    // Update selectedRole to reflect the new selection
    // this.selectedRole = newSelection;
  }


  //   this.selectedRole = newSelection;



  saveProduct() {
    this.disabled = true;
    this.submitted = true;

    let obj = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      lang: this.selectedLang.lang
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
    this.detailDialog = true;
    this.name = event.data.name;
    this.email = event.data.email;
    this.selectedRole = event.data.role;
    this.phone = event.data.phone;
    this.selectedLang = this.Lang.find(lang => lang.lang === event.data.lang);
    this.userName = event.data.userName;
    this.user_id = event.data.user_id;
    this.http.findRoleListByUserId({ user_id: event.data.user_id }).subscribe(
      (res: any) => {
        console.log(res);
        if (res.con) {
          let roleList = res.data;
          this.userofroleList = roleList
        }
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )
  };

  editProduct(data: any) {
    this.productDialog = true;
    this.addOrUpdate = true;
    this.name = data.name;
    this.email = data.email;
    this.selectedRole = data.role;
    this.phone = data.phone;
    this.selectedLang = this.Lang.find(lang => lang.lang === data.lang);
    this.userName = data.userName;
    this.user_id = data.user_id;
    this.http.findRoleListByUserId({ user_id: data.user_id }).subscribe(
      (res: any) => {
        console.log(res);
        if (res.con) {
          let roleList = res.data;
          this.roleLists = res.data;
          let fil = roleList.map((roleList: any) => roleList.role_id);
          this.selectedRole = this.Roles.filter((role: any) => fil.includes(role.role_id));
        }
      },
      (error: any) => {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
      }
    )
  }

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
