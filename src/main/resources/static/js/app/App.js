var app = angular.module('supplier',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://45.124.95.253:8989/fuwo',
    SUPPLIER_SERVICE_API : 'http://45.124.95.253:8989/fuwo/api/supplier/'
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

