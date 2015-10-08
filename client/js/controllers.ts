interface ITimelineScope extends ng.IScope {
}

/**
 * Controller for the timeline.
 */
class TimelineController {
    public static $inject = [
        "$scope",
        "$http",
        "$location",
        "$window",
        "$route",
        "ethereumService"];

    constructor(
        private $scope: ITimelineScope,
        private $http: ng.IHttpService,
        private $location: ng.ILocationService,
        private $window: ng.IWindowService,
        private $route: ng.route.IRouteService,
        private ethereumService: EthereumService) {


    }
}


interface IPostScope extends ng.IScope {
}




/**
 * Controller for a post.
 */
class PostController {
    public static $inject = [
        "$scope",
        "$http",
        "$location",
        "$window",
        "$route",
        "ethereumService"];

    constructor(
        private $scope: IPostScope,
        private $http: ng.IHttpService,
        private $location: ng.ILocationService,
        private $window: ng.IWindowService,
        private $route: ng.route.IRouteService,
        private ethereumService: EthereumService) {


    }
}



class NavigationController {
    public static $inject = [
        "$scope",
        "$location"];

    constructor(
        private $scope: ng.IScope,
        private $location: ng.ILocationService) {
    }
}