
/*  Resolution Non-Relative */
import { Component, OnInit } from '@angular/core';
import { FooterComponent, HeaderComponent, LandingComponent} from "./shared/index";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
/*  Resolution Relative to Current file */
import { FeaturesComponent } from "./features/index";
import { PricingComponent }from "./pricing/pricing.component";
import { AboutComponent } from "./about/about.component";
import { RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'app-layout',
    /*  Resolution Relative to HTML file (Index.html page) */
    templateUrl: "./app/app.component.html",
    /*  Resolution Relative to HTML file (Index.html page) */
    styleUrls: ['app/app.component.css'],
    directives: [JumbotronComponent, FooterComponent, HeaderComponent, LandingComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/', name: 'LandingPage', component: LandingComponent, useAsDefault: true },
        { path: '/features', name: 'Features', component: FeaturesComponent },
        { path: '/pricing', name: 'Pricing', component: PricingComponent },
        { path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent implements OnInit{

    ngOnInit(): any {
        
    }
}