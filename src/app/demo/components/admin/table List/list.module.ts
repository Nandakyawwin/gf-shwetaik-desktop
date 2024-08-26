import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CheckboxModule } from 'primeng/checkbox';
import { ListComponent } from './list.component';
import {ArrayToPipeStringPipe} from "../../../../array-to-pipe-string.pipe";
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [ListComponent],
    imports: [
        CommonModule,
        ListRoutingModule,
        ButtonModule,
        RippleModule,
        MultiSelectModule,
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
        CheckboxModule,
        ArrayToPipeStringPipe
    ]
})
export class ListModule { }
