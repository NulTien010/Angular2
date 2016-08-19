import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestMethod} from '@angular/http';
import { ConfigService } from "./configService";
import { Observable } from "rxjs/Rx";


@Injectable()
export class HttpService {
    constructor(private http: Http, private configService: ConfigService) {      
    }

    request(config: HttpConfig): Observable<Object> {
        var url = this.configService.webApiUrl;
        var env = this.configService.environment;

        // create Request
        let request: Request = new Request({ method: config.method, url: config.url });
        // go to server
        return this.http.request(request)
            /*  https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md
                http://reactivex.io/rxjs/identifiers.html
                http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
             */
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

export class HttpConfig {
    method: RequestMethod;
    url: string;
    constructor(method: RequestMethod, url: string) {
        this.method = method;
        this.url = url;
    }
}
