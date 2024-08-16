import { Component, OnInit } from '@angular/core';
import { StService } from '../../service/st.service';

@Component({
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit{ 

    username = '';
    role: any;
    constructor(private ST: StService,) { }
    


    ngOnInit(): void {
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
    }

}