import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { ToolbarModule } from 'primeng/toolbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RippleModule } from 'primeng/ripple';
import { LanguageComponent } from './language.component';


@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule,
    LanguageRoutingModule,
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
    BreadcrumbModule
  ]
})
export class LanguageModule { }
