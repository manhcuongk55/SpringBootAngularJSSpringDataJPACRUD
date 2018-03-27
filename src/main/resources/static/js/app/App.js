var app = angular.module('supplier',['ui.router','ngStorage']);

/*app.constant('urls', {
    BASE: 'http://45.124.95.253:8989/fuwo',
    SUPPLIER_SERVICE_API : 'http://45.124.95.253:8989/fuwo/api/supplier/'
});*/

app.constant('urls', {
    BASE: 'http://localhost:8989/fuwo',
    SUPPLIER_SERVICE_API : 'http://localhost:8989/fuwo/api/supplier/',
    GOOGLE_MAP_API : 'https://maps.googleapis.com/maps/api/geocode/json?address=',
    KEY : '&key=AIzaSyAXWxGM24UzMXCzB93o0_IWNmz4qJ_XVW8'
});
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                controller:'SupplierController',
                controllerAs:'ctrl',
                resolve: {
                    suppliers: function ($q, SupplierService) {
                        console.log('Load all suppliers');
                        var deferred = $q.defer();
                        SupplierService.loadAllSuppliers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }]);

