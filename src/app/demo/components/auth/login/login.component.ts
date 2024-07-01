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

    valCheck: string[] = ['remember'];

    password!: string;

    email: string;

    Language: any;
    constructor(public layoutService: LayoutService, private http: StService, private msgService: MessageService, private router: Router) { }



    ngOnInit(): void {
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('user_id');
        this.http.allLanguage().subscribe(
            (res: any) => {
                if (res.con) {
                    this.Language = res.data;
                    let l = this.Language.length;
                    for (let i: any = 0; i < l; i++) {
                        localStorage.setItem(`${i}`, `${this.Language[i].en}$-$${this.Language[i].mm}`);
                    }
                }
            }
        )
    };

    login() {
        let obj = {
            email: this.email,
            password: this.password
        }
        this.http.loginUser(obj).subscribe(
            (res: any) => {
                if (res.con) {
                    this.msgService.add({ key: 'tst', severity: 'success', summary: JSON.stringify(res.msg), detail: 'Login Successful' });
                    localStorage.setItem('role', res.data.role);
                    localStorage.setItem('email', res.data.email);
                    localStorage.setItem('name', res.data.name);
                    localStorage.setItem('user_id', res.data.user_id);
                    if (res.data.role == 'Admin') {
                        this.http.searchSystem(res.data.user_id).subscribe(
                            (ress: any) => {
                                if (ress.con) {
                                    // console.log(ress)
                                    if (ress.data.lang == 'en') {
                                        localStorage.setItem('language', 'en')
                                    } else if (ress.data.lang == 'mm') {
                                        localStorage.setItem('language', 'mm')
                                    }
                                }
                            },
                            (error: any) => {
                                this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error), detail: 'Internet Server Error' })
                            }
                        )
                        this.router.navigateByUrl('/');
                    }
                } else {
                    this.msgService.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Login Error' })
                }
            },
            (err: any) => {
                this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(err), detail: 'Internet Server Error' })
            }
        )
    }
}
