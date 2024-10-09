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

  i: any;
  i1: any;
  i2: any;
  i3: any;
  i4: any;
  i5: any;
  i6: any;
  i7: any;
  i8: any;
  i9: any;
  i10: any;
  i11: any;
  i18: any;
  i19: any;
  userManage: any;
  roleManage: any;
  languageManage: any;
  tableManage: any;
  colorManage: any;
  filterManage: any;
  tableSync: any;
  tableFetch: any;
  tableInsert: any;

  constructor(public layoutService: LayoutService, private http: StService) { }

  ngOnInit() {

    this.http
      .getString('user_id')
      .then((result) => {
        this.http.searchSystem(result).subscribe(
          (res: any) => {
            let ress = res.data.reverse();
          }
        )
      })
      .catch((error) => {
        console.log(error);
      });
    //                     this.http
    //                       .getString('1')
    //                       .then((result) => {
    //                         this.i3 = result;
    //                         this.http
    //                           .getString('0')
    //                           .then((result) => {
    //                             this.i4 = result;
    //                             this.http
    //                               .getString('3')
    //                               .then((result) => {
    //                                 this.i5 = result;
    //                                 this.http
    //                                   .getString('3')
    //                                   .then((result) => {
    //                                     this.i5 = result;
    //                                     this.http
    //                                       .getString('4')
    //                                       .then((result) => {
    //                                         this.i6 = result;
    //                                         this.http
    //                                           .getString('14')
    //                                           .then((result) => {
    //                                             this.i7 = result;
    //                                             this.http
    //                                               .getString('5')
    //                                               .then((result) => {
    //                                                 this.i8 = result;
    //                                                 this.http
    //                                                   .getString('6')
    //                                                   .then((result) => {
    //                                                     this.i9 = result;
    //                                                     this.http
    //                                                       .getString('15')
    //                                                       .then((result) => {
    //                                                         this.i10 = result;
    //                                                         this.http
    //                                                           .getString('16')
    //                                                           .then((result) => {
    //                                                             this.i11 = result;
    //                                                             this.http.getString('19').then((res) => {
    //                                                               this.i18 = res;
    //                                                               this.http.getString('18').then((res) => {
    //                                                                 this.i19 = res;
    //                                                                 this.model = [
    //                                                                   {
    //                                                                     label: this.i,
    //                                                                     items: [
    //                                                                       {
    //                                                                         label: this.i1, icon: 'pi pi-palette',
    //                                                                         routerLink: ['/']
    //                                                                       }
    //                                                                     ]
    //                                                                   },
    //                                                                   {
    //                                                                     label: this.i2,
    //                                                                     items: [
    //                                                                       {
    //                                                                         label: this.i3, icon: 'pi pi-user',
    //                                                                         routerLink: ['/admin/users'],
    //                                                                         canAx: this.userManage
    //                                                                       },
    //                                                                       {
    //                                                                         label: this.i4, icon: 'pi pi-sitemap',
    //                                                                         routerLink: ['/admin/roles'],
    //                                                                         canAx: this.roleManage
    //                                                                       },
    //                                                                       {
    //                                                                         label: this.i5, icon: 'pi pi-cog',
    //                                                                         routerLink: ['/admin/systems'],
    //                                                                         canAx: this.userManage
    //                                                                       },
    //                                                                       {
    //                                                                         label: this.i6, icon: 'pi pi-filter',
    //                                                                         routerLink: ['/admin/filters'],
    //                                                                         canAx: this.filterManage
    //                                                                       },
    //                                                                       {
    //                                                                         label: this.i19, icon: 'pi pi-list',
    //                                                                         routerLink: ['/admin/lists'],
    //                                                                       },
    //                                                                       {
    //                                                                         label: this.i18, icon: 'pi pi-tags',
    //                                                                         routerLink: ['/admin/pcodes'],
    //                                                                       },
    //                                                                     ]
    //                                                                   },
    //                                                                   {
    //                                                                     label: this.i7,
    //                                                                     items: [
    //                                                                       {
    //                                                                         label: this.i8, icon: 'pi pi-server',
    //                                                                         routerLink: ['/admin/tables'],
    //                                                                         canAx: this.tableManage
    //                                                                       },
    //                                                                       {
    //                                                                         label: this.i9, icon: 'pi pi-language',
    //                                                                         routerLink: ['/admin/languages'],
    //                                                                         canAx: this.languageManage
    //                                                                       }
    //                                                                     ]
    //                                                                   },
    //                                                                   {
    //                                                                     label: this.i10,
    //                                                                     items: [
    //                                                                       {
    //                                                                         label: this.i11, icon: 'pi pi-sign-out',
    //                                                                         routerLink: ['/auth/login']
    //                                                                       }
    //                                                                     ]
    //                                                                   }
    //                                                                 ];
    //                                                               })
    //                                                             })
    //                                                           })
    //                                                           .catch((error) => {
    //                                                             console.log(error);
    //                                                           });
    //                                                       })
    //                                                       .catch((error) => {
    //                                                         console.log(error);
    //                                                       });
    //                                                   })
    //                                                   .catch((error) => {
    //                                                     console.log(error);
    //                                                   });
    //                                               })
    //                                               .catch((error) => {
    //                                                 console.log(error);
    //                                               });
    //                                           })
    //                                           .catch((error) => {
    //                                             console.log(error);
    //                                           });
    //                                       })
    //                                       .catch((error) => {
    //                                         console.log(error);
    //                                       });
    //                                   })
    //                                   .catch((error) => {
    //                                     console.log(error);
    //                                   });
    //                               })
    //                               .catch((error) => {
    //                                 console.log(error);
    //                               });

    //                           })
    //                           .catch((error) => {
    //                             console.log(error);
    //                           });

    //                       })
    //                       .catch((error) => {
    //                         console.log(error);
    //                       });

    //                   })
    //                   .catch((error) => {
    //                     console.log(error);
    //                   });
    //               })
    //               .catch((error) => {
    //                 console.log(error);
    //               });

    //           })
    //           .catch((error) => {
    //             console.log(error);
    //           });

    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    this.model = [
      {
        label: localStorage.getItem('12'),
        items: [
          {
            label: localStorage.getItem('2'),
            icon: 'pi pi-palette',
            routerLink: ['/']
          }
        ]
      },
      {
        label: localStorage.getItem('13'),
        items: [
          {
            label: localStorage.getItem('1'), icon: 'pi pi-user',
            routerLink: ['/admin/users'],
            canAx: this.userManage
          },
          {
            label: localStorage.getItem('0'), icon: 'pi pi-sitemap',
            routerLink: ['/admin/roles'],
            canAx: this.roleManage
          },
          {
            label: localStorage.getItem('3'), icon: 'pi pi-cog',
            routerLink: ['/admin/systems'],
            canAx: this.userManage
          },
          {
            label: localStorage.getItem('4'), icon: 'pi pi-filter',
            routerLink: ['/admin/filters'],
            canAx: this.filterManage
          },
          {
            label: localStorage.getItem('18'), icon: 'pi pi-list',
            routerLink: ['/admin/lists'],
          },
          {
            label: localStorage.getItem('19'), icon: 'pi pi-tags',
            routerLink: ['/admin/pcodes'],
          },
          {
            label: localStorage.getItem('21'), icon: 'pi pi-barcode',
            routerLink: ['/admin/productcode'],
          },
          {
            label: localStorage.getItem('23'), icon: 'pi pi-barcode',
            routerLink: ['/admin/teamcode'],
          },
        ]
      },
      {
        label: localStorage.getItem('14'),
        items: [
          {
            label: localStorage.getItem('5'), icon: 'pi pi-server',
            routerLink: ['/admin/tables'],
            canAx: this.tableManage
          },
          {
            label: localStorage.getItem('6'), icon: 'pi pi-language',
            routerLink: ['/admin/languages'],
            canAx: this.languageManage
          }
        ]
      },
      {
        label: localStorage.getItem('15'),
        items: [
          {
            label: localStorage.getItem('16'), icon: 'pi pi-sign-out',
            routerLink: ['/auth/login']
          }
        ]
      }
    ];
  }
}
