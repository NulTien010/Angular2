
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
    selector: 'miomir-layout',
    templateUrl: "app/jumbotron/jumbotron.component.html",
    styleUrls: ['app/jumbotron/jumbotron.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class JumbotronComponent {
}