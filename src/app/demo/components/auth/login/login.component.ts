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
export class LoginComponent implements OnInit{

    valCheck: string[] = ['remember'];

    password!: string;

    email: string;

    constructor(public layoutService: LayoutService, private http: StService,private msgService: MessageService,private router: Router) { }
    


    ngOnInit(): void {
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
    }
    login() {
        let obj = {
            email: this.email,
            password: this.password
        }
        this.http.loginUser(obj).subscribe(
            (res: any) => {
                if (res.con) {
                    this.msgService.add({ key: 'tst', severity: 'success', summary: JSON.stringify(res.msg), detail: 'Login Successful' });
                    let role = localStorage.setItem('role', res.data.role);
                    let email = localStorage.setItem('email', res.data.email);
                    let name = localStorage.setItem('name', res.data.name);
                    if (res.data.role == 'admin') {
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
