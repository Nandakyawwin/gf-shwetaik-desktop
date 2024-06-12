import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    productTitle: any;

    en = 'en';

    langBool = false;

    constructor(public layoutService: LayoutService) { 
    }

    ngOnInit(): void {
        let en = localStorage.getItem('language');
        if (en == 'en') {
            this.langBool = false;
        } else {
            this.langBool = true;
        }
        this.productTitle = this.langBool == true ? localStorage.getItem('9').split("$-$")[1] : localStorage.getItem('9').split("$-$")[0] 
        
    }
    
}
