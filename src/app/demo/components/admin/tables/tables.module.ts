import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    ButtonModule,
		RippleModule,
    SplitButtonModule,
    TabViewModule,
    ToggleButtonModule,
    ToolbarModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    PasswordModule,
    MessagesModule,
		MessageModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    TableModule,
    DialogModule,
    InputTextareaModule,
    ReactiveFormsModule,
    RadioButtonModule,
    DropdownModule,
    BreadcrumbModule
  ]
})
export class TablesModule { }
