import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { StService } from '../../service/st.service';
import { Router } from '@angular/router'

@Component({
    templateUrl: './dashboard.component.html',
    providers: [MessageService]
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    Tables = 0;

    products!: Product[];

    loading = false;

    l1 = false;

    l2 = false;

    Users = 0;

    Langs = 0;

    Roles = 0;

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(private productService: ProductService, public layoutService: LayoutService, private ST: StService, private msg: MessageService, private router: Router) {
        // this.subscription = this.layoutService.configUpdate$
        // .pipe(debounceTime(25))
        // .subscribe((config) => {
        //     this.initChart();
        // });
    }

    ngOnInit() {
        this.all();
        this.initChart();
        // this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }



    all() {
        this.loading = true;
        this.ST.allUser().subscribe(
            (res: any) => {
                this.Users = res.length;
                this.l1 = true;
            },
            (error: any) => {
                this.l1 = false;
                this.msg.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
            }
        );

        this.ST.allTable().subscribe(
            (res: any) => {
                this.Tables = res.data.length;
                this.l1 = true;
            },
            (error: any) => {
                this.l1 = false;
                this.msg.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
            }
        );

        this.ST.allLanguage().subscribe(
            (res: any) => {
                this.Langs = res.data.length;
                this.l1 = true;
            },
            (error: any) => {
                this.l1 = false;
                this.msg.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
            }
        );

        this.ST.allRole().subscribe(
            (res: any) => {
                this.Roles = res.length;
                this.l2 = true;
            },
            (error: any) => {
                this.l2 = false;
                this.msg.add({ key: 'tst', severity: 'error', summary: JSON.stringify(error.name), detail: 'Internet Server Error' })
            }
        )
    }
    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
