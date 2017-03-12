import { Component, OnInit } from '@angular/core';

import { TransactionService } from './transaction.service';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

    private transactions = [];

    constructor(private transactionService: TransactionService) { }

    ngOnInit() {
        this.transactionService.getTransactions()
            .then(transactions => this.transactions = transactions);
    }

    transactionClick(e: any) {
        console.log(e);
    }

    private getTextColorBasedOnBackground(bgColor: string) {
        if (!bgColor) { return ''; }
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgColor);
        var color = result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
	    return color && (color.r*0.299 + color.g*0.587 + color.b*0.114) <= 186 ? '#FFF' : '#333';
    }
};
