import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { DialogModule } from 'primeng/dialog';
import { SystemComponent } from './system.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    ButtonModule,
		RippleModule,
		SplitButtonModule,
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
    RadioButtonModule,
    DropdownModule,
    BreadcrumbModule,
    CheckboxModule
  ]
})
export class SystemModule { }
