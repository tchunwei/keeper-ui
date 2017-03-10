import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    menuOpened: boolean = true;

    links: any[] = [
        { name: "Transaction", link: "/transactions" },
        { name: "Category", link: "/categories" }
    ]
}
