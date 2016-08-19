System.register(['@angular/core', '@angular/http', "./configService", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1, configService_1, Rx_1;
    var HttpService, HttpConfig;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (configService_1_1) {
                configService_1 = configService_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            HttpService = (function () {
                function HttpService(http, configService) {
                    this.http = http;
                    this.configService = configService;
                }
                HttpService.prototype.request = function (config) {
                    var url = this.configService.webApiUrl;
                    var env = this.configService.environment;
                    // create Request
                    var request = new http_1.Request({ method: config.method, url: config.url });
                    // go to server
                    return this.http.request(request)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                HttpService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                HttpService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? '${error.status} - ${error.statusText}' : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Rx_1.Observable.throw(errMsg);
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, configService_1.ConfigService])
                ], HttpService);
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
            HttpConfig = (function () {
                function HttpConfig(method, url) {
                    this.method = method;
                    this.url = url;
                }
                return HttpConfig;
            }());
            exports_1("HttpConfig", HttpConfig);
        }
    }
});
//# sourceMappingURL=httpService.js.map