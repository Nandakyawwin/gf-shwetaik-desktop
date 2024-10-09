import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamCodeRoutingModule } from './teamcode-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChipsModule } from 'primeng/chips';
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
import { ArrayToPipeStringPipe } from "../../../../array-to-pipe-string.pipe";
import { MultiSelectModule } from 'primeng/multiselect';
import { TeamcodeComponent } from './teamcode.component';


@NgModule({
  declarations: [TeamcodeComponent],
  imports: [
    CommonModule,
    TeamCodeRoutingModule,
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
    ChipsModule,
    DialogModule,
    InputTextareaModule,
    RadioButtonModule,
    DropdownModule,
    BreadcrumbModule,
    CheckboxModule,
    ArrayToPipeStringPipe
  ]
})
export class TeamcodeModule { }
