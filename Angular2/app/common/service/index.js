System.register(["./httpService", "./configService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (httpService_1_1) {
                exports_1({
                    "HttpService": httpService_1_1["HttpService"],
                    "HttpConfig": httpService_1_1["HttpConfig"]
                });
            },
            function (configService_1_1) {
                exports_1({
                    "ConfigService": configService_1_1["ConfigService"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map