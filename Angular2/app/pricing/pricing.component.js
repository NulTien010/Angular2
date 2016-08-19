System.register(["@angular/core", "@angular/http", "../common/service/index"], function(exports_1, context_1) {
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
    var core_1, http_1, index_1;
    var PricingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            PricingComponent = (function () {
                function PricingComponent(httpService, configService) {
                    this.httpService = httpService;
                    this.configService = configService;
                }
                PricingComponent.prototype.ngOnInit = function () {
                    // call back-end
                    var config = new index_1.HttpConfig(http_1.RequestMethod.Get, this.configService.webApiUrl + "api/data/model");
                    /*  Subscribe
                        https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribe.md
                    */
                    this.httpService.request(config).subscribe(this.successHandler, this.errorHandler, this.completeHandler);
                };
                PricingComponent.prototype.successHandler = function (value) {
                    this.data = value;
                };
                PricingComponent.prototype.errorHandler = function (error) {
                };
                PricingComponent.prototype.completeHandler = function () {
                    this.data.forEach(function (value, index, array) {
                        var yrt = value;
                    });
                };
                PricingComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/pricing/pricing.component.html",
                        styleUrls: ['app/pricing/pricing.component.css'],
                        providers: [index_1.HttpService, index_1.ConfigService]
                    }), 
                    __metadata('design:paramtypes', [index_1.HttpService, index_1.ConfigService])
                ], PricingComponent);
                return PricingComponent;
            }());
            exports_1("PricingComponent", PricingComponent);
        }
    }
});
//# sourceMappingURL=pricing.component.js.map