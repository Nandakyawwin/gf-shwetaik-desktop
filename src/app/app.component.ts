import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { StService } from './demo/service/st.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private http: StService) { }

    ngOnInit() {
        this.http.getString('user_id').then((result) => {
            console.log(result);
            this.http.findRoleListByUserId({ user_id: Number(result) }).subscribe(
                (res: any) => {
                    console.log(res)
                }
            )
        })
        this.primengConfig.ripple = true;
    }
}
