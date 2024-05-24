import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableService } from 'primeng/table';
import { StService } from 'src/app/demo/service/st.service';

@Component({
  selector: 'app-language',
  providers: [MessageService,TableService],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {

  selectedProduct: any;

  language_id: any;

  role_id: any;

  first: any = 0;

  userName: any;

  roleName: any;

  disabled: boolean = false;

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  formGroup: any;

  selectedRole: any;

  submitted: boolean = false;
  
  addOrUpdate: boolean = false;

  rows = 10;

  Users: any;

  Roles: any;

  name: any;

  phone: any;

  mm: any;

  en: any;

  role: any;

  user_id: any;

  email: any;

  password: any;

  Languages: any;

  constructor(private http: StService,private msgService: MessageService) { }
  


  ngOnInit(): void {

    this.http.allLanguage().subscribe(
      (res: any) => {
        let Languages = res.data;
        this.Languages = Languages.reverse();
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
      this.en = '';
      this.mm = '';
      this.language_id = '';
    }
  }

  hideDialog() {

    this.productDialog = false;
    this.submitted = false;
    this.en = '';
    this.mm = '';
    this.language_id = '';
    console.log("dd")
  }
  
  saveProduct() {

    this.disabled = true;
    this.submitted = true;

    let obj = {
      en: this.en,
      mm: this.mm,
    };

    this.http.saveLanguage(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'User Create Successfully' });

          this.en = '';
          this.mm = '';
          this.language_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.disabled = false;

          this.http.allLanguage().subscribe(
            (res: any) => {
              let Languages = res.data;
              this.Languages = Languages.reverse();
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
    this.en = event.data.en;
    this.mm = event.data.mm;
    this.language_id = event.data.language_id;

  };

  onRowUnselect(event: any) {
  console.log(event);
  };

  updateProduct() {

    this.submitted = true;

    let obj = {
      en: this.en,
      mm: this.mm,
      language_id: this.language_id
    };

    this.http.updateLanguage(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Role Update Successfully' });
          this.en = '';
          this.mm = '';
          this.language_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allLanguage().subscribe(
            (res: any) => {
              if (res.con) {
                let Languages = res.data;
                this.Languages = Languages.reverse();
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
    this.language_id = obj;
  }

  confirmDelete() {
    let obj = {
      language_id: this.language_id
    }
    this.http.deleteLanguage(obj).subscribe(
      (res: any) => {
        if (res.con) {
          this.msgService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Role Delete Successfully' });
          this.deleteProductDialog = false;
          this.en = '';
          this.mm = '';
          this.language_id = '';
          this.productDialog = false;
          this.submitted = false;
          this.addOrUpdate = false;
          this.http.allLanguage().subscribe(
            (res: any) => {
              if (res.con) {
                let Languages = res.data;
                this.Languages = Languages.reverse();
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