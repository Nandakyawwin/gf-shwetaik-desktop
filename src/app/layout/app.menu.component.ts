import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { StService } from '../demo/service/st.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements AfterViewInit{

    model: any[] = [];

    Language: any;

     i:any;
     i1:any;
     i2:any;
     i3:any;
     i4:any;
     i5:any;
     i6:any;
     i7:any;
     i8:any;
     i9:any;
     i10:any;
     i11:any;



    constructor(public layoutService: LayoutService,private http: StService) { }

    ngAfterViewInit() {
        this.http
        .getString('12')
        .then((result) => {
            this.i = result;
            this.http
        .getString('2')
        .then((result) => {
            this.i1 = result;
            this.http
        .getString('2')
        .then((result) => {
            this.i1 = result;
            this.http
        .getString('2')
        .then((result) => {
            this.i1 = result;
            this.http
        .getString('13')
        .then((result) => {
            this.i2 = result;
            this.http
            .getString('1')
            .then((result) => {
                this.i3 = result;
                this.http
        .getString('0')
        .then((result) => {
            this.i4 = result;
            this.http
        .getString('3')
        .then((result) => {
            this.i5 = result;
            this.http
        .getString('3')
        .then((result) => {
            this.i5 = result;
            this.http
        .getString('4')
        .then((result) => {
            this.i6 = result;
            this.http
        .getString('14')
        .then((result) => {
            this.i7 = result;
            this.http
        .getString('5')
        .then((result) => {
            this.i8 = result;
            this.http
        .getString('6')
        .then((result) => {
            this.i9 = result;
            this.http
        .getString('15')
        .then((result) => {
            this.i10 = result;
            this.http
        .getString('16')
        .then((result) => {
            this.i11 = result;
            this.model = [
                {
                    label: this.i,
                    items: [
                        { label: this.i1 }
                    ]
                },
                {
                    label: this.i2,
                    items: [
                        {
                            label: this.i3, icon: 'pi pi-user',
                            routerLink: ['/admin/users']
                        },
                        {
                            label: this.i4, icon: 'pi pi-sitemap',
                            routerLink: ['/admin/roles']
                        },
                        {
                            label: this.i5, icon: 'pi pi-cog',
                            routerLink: ['/admin/systems']
                        },
                        {
                            label: this.i6, icon: 'pi pi-filter',
                            routerLink: ['/admin/filters']
                        },
                    ]
                },
                {
                    label: this.i7,
                    items: [
                        {
                            label: this.i8, icon: 'pi pi-server',
                            routerLink: ['/admin/tables']
                        },
                        {
                            label: this.i9, icon: 'pi pi-language',
                            routerLink: ['/admin/languages']
                        }
                    ]
                },
                {
                    label: this.i10,
                    items: [
                        {
                            label: this.i11, icon: 'pi pi-sign-out',
                            routerLink: ['/auth/login']
                         }
                    ]
                }
            ];

        console.log(this.i1)


        console.log(this.model)
        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
            
        })
        .catch((error) => {
          console.log(error);
        });
                
            })
            .catch((error) => {
              console.log(error);
            });

        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
            
        })
        .catch((error) => {
          console.log(error);
        });
            
        })
        .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });

        

        

        

        

        

        


        

        

        

        

        

    }
}
