import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService {

    constructor(private http: Http) { }

    getTransactions(): Promise<any[]> {
        return this.http.get("http://localhost:2955/transactions/?made_on>2017-03-01")
            .toPromise()
            .then(response => response.json())
            .catch(error => Promise.reject(error.message || error));
    }
}
