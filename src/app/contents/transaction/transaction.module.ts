import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        TransactionRoutingModule
    ],
    declarations: [TransactionComponent]
})
export class TransactionModule { }
