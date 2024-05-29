import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-tables',
  providers: [MessageService,TableService],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

  selectedProduct: any;

  code:any

  Tables: any;

  tableIndex = 0;

  kk:any;

  fetch:any;

  role_id: any;

  activeIndex = 0;

  scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: "Title", content: "Content" }));

  first = 0;

  userName: any;

  roleName: any;

  disabled = false;

  productDialog = false;

  productDialogs = false;

  deleteProductDialog = false;

  formGroup: any;

  selectedRole: any;

  submitted = false;
  
  addOrUpdate = false;

  rows = 10;

  Users: any;

  Roles: any;

  name: any;

  phone: any;

  role: any;

  form: FormGroup;

  user_id: any;

  email: any;

  tableName: any;

  table_id: any;

  password: any;

  keys:any;

  datas :any;

  selectTableName: any;
  
  

  constructor(private http: StService,private msgService: MessageService,private fb: FormBuilder) { }
  


  ngOnInit(): void {

    this.http.allTable().subscribe(
      (res: any) => {
        let Tables = res.data;
        this.Tables = Tables.reverse();
        this.keys = Object.keys(this.Tables[0]);
        let table1 = this.Tables[0].tableName;
        this.http.getList(String(table1)).subscribe(
          (res:any)=>{
            console.log(res)
            this.datas = res;
            this.keys = Object.keys(this.datas[0]);
            this.formGroup = this.fb.group({});
            this.keys.forEach(key => {
              this.formGroup.addControl(key, this.fb.control(''));
            });
          this.http.dataSync(table1,res).subscribe(
            (res:any)=>{
              if(res){
                this.msgService.add({ key: 'tst', severity: 'success', summary: "success", detail: 'Data sync Success' })
              }
            }
          )

          },
          (err:any)=>{
            console.log(err);
          }
        )
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
    this.productDialog = true;
  }

  hideDialog() {

    this.productDialog = false;
    this.submitted = false;
    this.tableName = '';
    this.table_id = '';
  }
  
  saveProduct() {

    this.disabled = true;
    this.submitted = true;

    let obj = {
      tableName: this.tableName,
    };

    this.http.saveTable(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'User Create Successfully' });
          this.tableName = '';
          this.table_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.disabled = false;

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
    this.tableName = event.data.tableName;
    this.table_id = event.data.table_id;

  };

  onRowUnselect(event: any) {
  console.log(event);
  };

  updateProduct() {

    this.submitted = true;

    let obj = {
      tableName: this.tableName,
      table_id: this.table_id
    };

    this.http.updateTable(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Role Update Successfully' });

          this.tableName = '';
          this.table_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allTable().subscribe(
            (res: any) => {
              if (res.con) {
                let Table = res.data;
                this.Tables = Table.reverse();
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
    this.table_id = obj;
  }

  confirmDelete() {
    let obj = {
      table_id: this.table_id
    }
    this.http.deleteTable(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Role Delete Successfully' });
          this.deleteProductDialog = false;
          this.tableName = '';
          this.table_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allTable().subscribe(
            (res: any) => {
              if (res.con) {
                let Table = res.data;
                this.Tables = Table.reverse();
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

  onTabChange(e: any) {
    console.log(e);
    let tableData = this.Tables[e.index].tableName;
    this.selectTableName = tableData;
    this.http.getList(String(tableData)).subscribe(
      (res:any)=>{
        console.log(res)
        this.datas = res;
        this.keys = Object.keys(this.datas[0]);
        this.formGroup = this.fb.group({});
        this.keys.forEach(key => {
          this.formGroup.addControl(key, this.fb.control(''));
        });
      },
      (err:any)=>{
        console.log(err);
      }
    )

  }

  onSubmit() {
    this.submitted = true;
    if (this.formGroup.valid) {
      console.log(this.formGroup);

    }
  }

  
  dataSync() {
  }

  dataFetch() {
    this.http.getList(this.selectTableName).subscribe(
      (res:any)=>{
        this.fetch = res;
        this.kk = Object.keys(this.fetch[0]);
        this.msgService.add({ key: 'tst', severity: 'success', summary: "success", detail: 'Data Fetch Success' })
      }
    )
  }

  dataInsert() {
    
  }


  openDialogs() {
    this.productDialogs = true;
  }

  saveProducts() {

    this.disabled = true;
    this.submitted = true;

    let obj = {
      tableName: this.tableName,
      code: this.code
    };

    console.log(obj);
    // this.http.saveTable(obj).subscribe(
    //   (res: any) => {
    //     if (res.con) {
    //       this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'User Create Successfully' });
    //       this.tableName = '';
    //       this.code = '';
    //       this.table_id = '';
    //       this.productDialogs = false;
    //       this.submitted = false;
    //       this.disabled = false;

    //       this.http.allTable().subscribe(
    //         (res: any) => {
    //           let Table = res.data;
    //           this.Tables = Table.reverse();
    //         },
    //         (error: any) => {
    //           this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
    //         }
    //       )
    //     }
    //   },
    //   (err: any) => {
    //     this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(err.name), detail: 'Internet Server Error' });
    //     this.disabled = false;
    //   }
    // )
  };


}