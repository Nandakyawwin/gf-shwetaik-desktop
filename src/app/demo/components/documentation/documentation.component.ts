import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit{ 

    username = '';
    constructor() { }
    


    ngOnInit(): void {
        this.username = localStorage.getItem('name');
    }

}