import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { StService } from '../demo/service/st.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    Language: any;


    LangBool = false;

    constructor(public layoutService: LayoutService,private http: StService) { }

    ngOnInit() {
        let en = localStorage.getItem('language');
        if (en == 'en') {
            this.LangBool = false;
        } else {
            this.LangBool = true;
        }

        this.model = [
            {
                label: this.LangBool == true ? localStorage.getItem('12').split("$-$")[1] : localStorage.getItem('12').split("$-$")[0],
                items: [
                    { label: this.LangBool == true ? localStorage.getItem('2').split("$-$")[1] : localStorage.getItem('2').split("$-$")[0], icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: this.LangBool == true ? localStorage.getItem('13').split("$-$")[1] : localStorage.getItem('13').split("$-$")[0],
                items: [
                    {
                        label: this.LangBool == true ? localStorage.getItem('1').split("$-$")[1] : localStorage.getItem('1').split("$-$")[0], icon: 'pi pi-user',
                        routerLink: ['/admin/users']
                    },
                    {
                        label: this.LangBool == true ? localStorage.getItem('0').split("$-$")[1] : localStorage.getItem('0').split("$-$")[0], icon: 'pi pi-sitemap',
                        routerLink: ['/admin/roles']
                    },
                    {
                        label: this.LangBool == true ? localStorage.getItem('3').split("$-$")[1] : localStorage.getItem('3').split("$-$")[0], icon: 'pi pi-cog',
                        routerLink: ['/admin/systems']
                    },
                    {
                        label: this.LangBool == true ? localStorage.getItem('4').split("$-$")[1] : localStorage.getItem('4').split("$-$")[0], icon: 'pi pi-filter',
                        routerLink: ['/admin/filters']
                    },
                ]
            },
            {
                label: this.LangBool == true ? localStorage.getItem('14').split("$-$")[1] : localStorage.getItem('14').split("$-$")[0],
                items: [
                    {
                        label: this.LangBool == true ? localStorage.getItem('5').split("$-$")[1] : localStorage.getItem('5').split("$-$")[0], icon: 'pi pi-server',
                        routerLink: ['/admin/tables']
                    },
                    {
                        label: this.LangBool == true ? localStorage.getItem('6').split("$-$")[1] : localStorage.getItem('6').split("$-$")[0], icon: 'pi pi-language',
                        routerLink: ['/admin/languages']
                    }
                ]
            },
            {
                label: this.LangBool == true ? localStorage.getItem('15').split("$-$")[1] : localStorage.getItem('15').split("$-$")[0],
                items: [
                    {
                        label: this.LangBool == true ? localStorage.getItem('16').split("$-$")[1] : localStorage.getItem('16').split("$-$")[0], icon: 'pi pi-sign-out',
                        routerLink: ['/auth/login']
                     }
                ]
            }
        ];
    }
}
