﻿
/**
 * https://angular.io/docs/ts/latest/quickstart.html
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
((window: Window) => {
    // map tells the System loader "where to look" for things: map a module alias to a location OR package
    var map = {
        'app': './app',
        '@angular': './node_modules/@angular',
        'rxjs': './node_modules/rxjs'/*,
        '@reactivex/rxjs/dist/es6/Rx': "./node_modules/@reactivex/rxjs/dist/es6/Rx"*/
    };
    /* packages tells the System loader "how to load" when no filename and/or no extension

        const packages = {
            app: { main: "main.js", defaultExtension: "js" },
            rxjs: { defaultExtension: "js" },
            'angular2-in-memory-web-api': { defaultExtension: "js" }
        };

    */
    const packages: any = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }/*,
        '@reactivex/rxjs/dist/es6/Rx': { defaultExtension: 'js' }*/
    };
    const ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    // Add package entries for angular packages
    ngPackageNames.forEach(pkgName => {
        packages['@angular/' + pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    });

    const bundles = {};
    const depCache = {};

    var config = {
        bundles: bundles,
        depCache: depCache,
        map: map,
        packages: packages
    }

    System.config(config);

})(this);
