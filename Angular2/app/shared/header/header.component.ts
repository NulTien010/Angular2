
import { Component, OnInit } from "@angular/core";
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'header-layout',
    templateUrl: "app/shared/header/header.component.html",
    styleUrls: ['app/shared/header/header.component.css'],
    directives: [NavComponent]
})
export class HeaderComponent implements OnInit{
    ngOnInit(): any {
        
    }
}