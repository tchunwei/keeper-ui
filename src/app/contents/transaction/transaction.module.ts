import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { TransactionService } from './transaction.service';

import { GroupByPipe } from './../../pipes/group-by.pipe';

@NgModule({
    providers: [
        TransactionService
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TransactionRoutingModule
    ],
    declarations: [
        TransactionComponent,
        GroupByPipe
    ]
})
export class TransactionModule { }
