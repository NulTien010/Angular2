System.register(['@angular/core', "./shared/index", "./jumbotron/jumbotron.component", "./features/index", "./pricing/pricing.component", "./about/about.component", '@angular/router-deprecated'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, index_1, jumbotron_component_1, index_2, pricing_component_1, about_component_1, router_deprecated_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (jumbotron_component_1_1) {
                jumbotron_component_1 = jumbotron_component_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (pricing_component_1_1) {
                pricing_component_1 = pricing_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-layout',
                        /*  Resolution Relative to HTML file (Index.html page) */
                        templateUrl: "./app/app.component.html",
                        /*  Resolution Relative to HTML file (Index.html page) */
                        styleUrls: ['app/app.component.css'],
                        directives: [jumbotron_component_1.JumbotronComponent, index_1.FooterComponent, index_1.HeaderComponent, index_1.LandingComponent, router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'LandingPage', component: index_1.LandingComponent, useAsDefault: true },
                        { path: '/features', name: 'Features', component: index_2.FeaturesComponent },
                        { path: '/pricing', name: 'Pricing', component: pricing_component_1.PricingComponent },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map