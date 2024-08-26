import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        DocumentationRoutingModule,
        FormsModule
    ],
    declarations: [DocumentationComponent]
})
export class DocumentationModule { }
