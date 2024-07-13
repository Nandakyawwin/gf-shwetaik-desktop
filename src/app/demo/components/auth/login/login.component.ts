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
export class LoginComponent{

    valCheck: string[] = ['remember'];

    password!: string;

    email: string;

    Language: any;
    constructor(public layoutService: LayoutService, private http: StService, private msgService: MessageService, private router: Router) { }



    ionViewWillEnter(): void {
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
            this.router.navigateByUrl('/');
            
            if (res.data.role === 'Admin') {
                this.handleAdminLogin(res.data.user_id);
            }
        } else {
            this.msgService.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Login Error' });
        }
    }
    
    storeUserData(data: any) {
        this.http.setString('user_id', String(data.user_id));
        this.http.setString('role', String(data.role));
        this.http.setString('email', String(data.email));
        this.http.setString('name', String(data.name));
    }
    
    handleAdminLogin(userId: string) {
        this.http.searchSystem(userId).subscribe(
            (ressl: any) => this.handleSearchSystemResponse(ressl),
            (error: any) => this.handleError(error, 'Internet Server Error')
        );
    }
    
    handleSearchSystemResponse(ressl: any) {
        if (ressl.con) {
            console.log(ressl);
            this.loadAllLanguages(ressl.data.lang);
        }
    }
    
    loadAllLanguages(userLang: string) {
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
        for (let i = 0; i < length; i++) {
            console.log(this.Language[i]);
            if (userLang === 'en' || userLang === 'mm') {
                this.http.setString(`${i}`, `${this.Language[i][userLang]}`);
            }
        }
    }
    
    handleError(error: any, detail: string) {
        this.msgService.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error), detail });
    }
    
}
