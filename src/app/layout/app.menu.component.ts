import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Admins',
                items: [
                    {
                        label: 'User', icon: 'pi pi-user',
                        routerLink: ['/admin/users']
                    },
                    {
                        label: 'Roles', icon: 'pi pi-sitemap',
                        routerLink: ['/admin/roles']
                    },
                    {
                        label: 'System Options', icon: 'pi pi-cog',
                        routerLink: ['/admin/systems']
                    },
                    {
                        label: 'Table Filters', icon: 'pi pi-filter',
                        routerLink: ['/admin/filters']
                    },
                ]
            },
            {
                label: 'Datas & Languages',
                items: [
                    {
                        label: 'Tables', icon: 'pi pi-server',
                        routerLink: ['/admin/tables']
                    },
                    {
                        label: 'Languages', icon: 'pi pi-language',
                        routerLink: ['/admin/languages']
                    }
                ]
            },
            {
                label: 'Session',
                items: [
                    {
                        label: 'Logout', icon: 'pi pi-sign-out',
                        routerLink: ['/auth/login']
                     }
                ]
            },
            {
                label: 'Auth',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/auth/login']
                    },
                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['/auth/error']
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/auth/access']
                    }
                ]
            },
        ];
    }
}
