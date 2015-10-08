/// <reference path="../typings/tsd.d.ts" />

module SocialContractsClient {
    'use strict';

    // All controllers are registered here.
    var socialContractsApp = angular.module('socialContractsApp', ['ngResource', 'ngRoute', 'ngSanitize'])
        .controller('NavigationController', NavigationController)
        .controller('NavigationController', TimelineController)
        .controller('NavigationController', PostController)
        ;

    socialContractsApp.config(function ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
        $routeProvider
            .when('/', { controller: TimelineController, templateUrl: 'views/timeline.html' })
            .when('/post/new', { controller: PostController, templateUrl: 'views/post-new.html' })
            .otherwise({ redirectTo: 'not-found' });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

    });

    socialContractsApp.service('ethereumService', EthereumService);
}

/**
 * Shorthand method for getting an Angular service from the debug console.
 */
function angularGetService(serviceName: string) {
    return angular.element(document.querySelector('.ng-scope')).injector().get(serviceName);
}

