import { Component, OnInit } from "@angular/core";
import { RequestMethod } from "@angular/http";
import { HttpService, HttpConfig, ConfigService } from "../common/service/index";

@Component({
    templateUrl: "app/pricing/pricing.component.html",
    styleUrls: [ 'app/pricing/pricing.component.css' ],
    providers: [HttpService, ConfigService ]
})
export class PricingComponent implements OnInit{

    private data: Object;
    constructor(private httpService: HttpService, private configService: ConfigService) {
        
    }

    ngOnInit(): void {
        // call back-end
        let config: HttpConfig = new HttpConfig(RequestMethod.Get, this.configService.webApiUrl + "api/data/model");
        /*  Subscribe
            https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribe.md
        */
        this.httpService.request(config).subscribe(this.successHandler, this.errorHandler, this.completeHandler);
    }

    private successHandler(value: Object): void {
        this.data = value;
    }

    private errorHandler(error: any): void {
        
    }

    private completeHandler(): void {
        (<Object[]>this.data).forEach((value, index, array) => {
            let yrt = value;
        });
    }
}