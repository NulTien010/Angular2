import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    environment: string;
    webApiUrl: string;

    constructor() {
        this.environment = "DEV";
        this.webApiUrl = "https://localhost:44399/";
    }
}