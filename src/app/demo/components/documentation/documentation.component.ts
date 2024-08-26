import { Component, OnInit } from '@angular/core';
import { StService } from '../../service/st.service';

@Component({
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit{ 

    username = '';
  role: any;
  port: any;
  DCF: any = `C:\\eStream\\SQLAccounting\\Share\\Default.DCF`;
  portInput = true;
  DCFBool = true;
  edit = true;
  conn = false;
  editDCF = true;
  connDCF = false;
    constructor(private ST: StService,private http: StService) { }
    


  ngOnInit(): void {
      console.log(this.DCF)
        this.ST
        .getString('name')
        .then((result) => {
           this.username = result;
        })
        .catch((error) => {
          console.log(error);
        });

        this.ST
        .getString('role')
        .then((result) => {
           this.role = result;
        })
        .catch((error) => {
          console.log(error);
        });
    
        this.ST
        .getString('port')
        .then((result) => {
          this.port = result;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
  portfunc() {
    this.portInput = !this.portInput;
    this.edit = !this.edit;
    this.conn = !this.conn;
    this.http.setString('port', String(this.port));
    }
  
    DCFfunc() {
      this.DCFBool = !this.DCFBool;
      this.editDCF = !this.editDCF;
      this.connDCF = !this.connDCF;
      this.http.setString('DCF', String(this.DCF));
      }
}