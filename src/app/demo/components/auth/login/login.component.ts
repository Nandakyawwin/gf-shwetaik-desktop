import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StService } from 'src/app/demo/service/st.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [MessageService],
})
export class LoginComponent implements OnInit {

    model: any[] = [];

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
    langs: any;

    valCheck: string[] = ['remember'];

    password!: string;

    email: string;

    Language: any;
    constructor(public layoutService: LayoutService, private http: StService, private msgService: MessageService, private router: Router) { }

    ngOnInit(): void {
        this.http.removeString('user_id');
        this.http.removeString('role');
        this.http.removeString('email');
        this.http.removeString('name');
    };

    login() {
        let obj = {
            email: this.email,
            password: this.password
        }
        this.loginUser(obj);
    }

    loginUser(obj: any) {
        this.http.loginUser(obj).subscribe(
            (res: any) => this.handleLoginResponse(res),
            (err: any) => this.handleError(err, 'Internet Server Error')
        );
    }

    handleLoginResponse(res: any) {
        if (res.con) {
            this.msgService.add({ key: 'tst', severity: 'success', summary: JSON.stringify(res.msg), detail: 'Login Successful' });
            this.storeUserData(res.data);
            console.log("Hello", res.data.role.roleName);
            if (res.data.role.roleName !== 'admin') {
                alert(res.data.role.roleName);
                this.handleAdminLogin(res.data.role_id);
            } else {
                this.handleAdminLogin(res.data.role_id);
            }
        } else {
            this.msgService.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Login Error' });
        }
    }

    storeUserData(data: any) {
        this.http.setString('user_id', String(data.user_id));
        this.http.setString('role', String(data.role.roleName));
        this.http.setString('role_id', String(data.role_id));
        this.http.setString('email', String(data.email));
        this.http.setString('name', String(data.name));
        this.http.setString('userName', String(data.userName));
        this.http.setString('lang', String(data.lang));
        this.langs = data.lang;
    }

    handleAdminLogin(userId: string) {
        this.http.searchSystem(userId).subscribe(
            (ressl: any) => this.handleSearchSystemResponse(ressl),
            (error: any) => this.handleError(error, 'Internet Server Error')
        );
    }

    handleSearchSystemResponse(ressl: any) {
        if (ressl.con) {
            console.log(ressl.data.lang);
            console.log(ressl);
            let ll = ressl.data.reverse();
            this.loadAllLanguages(this.langs);
        }
    }

    loadAllLanguages(userLang: string) {
        console.log(userLang)
        this.http.allLanguage().subscribe(
            (resss: any) => this.handleAllLanguageResponse(resss, userLang),
            (error: any) => this.handleError(error, 'Internet Server Error')
        );
    }

    handleAllLanguageResponse(resss: any, userLang: string) {
        if (resss.con) {
            this.Language = resss.data;
            this.storeLanguages(userLang);
        }
    }

    storeLanguages(userLang: string) {
        let length = this.Language.length;
        let c = 0;
        console.log(userLang)
        for (let i = 0; i < length; i++) {
            if (userLang === 'en' || userLang === 'mm') {
                this.http.setString(`${i}`, `${this.Language[i][userLang]}`);
                c = i;
            }
        }
        if ((c + 1) == length) {
            this.http
                .getString('roleName')
                .then((result) => {
                    let role = result;
                    console.log(role)
                    if (role === 'admin') {
                        console.log(true)
                        this.router.navigateByUrl('/');
                    } else {
                        console.log(false)
                        this.router.navigateByUrl('/documentation');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    handleError(error: any, detail: string) {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error), detail });
    }

    lang() {
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
