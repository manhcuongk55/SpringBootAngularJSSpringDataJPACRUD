'use strict';

angular.module('supplier').factory('SupplierService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllSuppliers: loadAllSuppliers,
                getAllSuppliers: getAllSuppliers,
                getSupplier: getSupplier,
                createSupplier: createSupplier,
                updateSupplier: updateSupplier,
                removeSupplier: removeSupplier,
                getCoordinateFromAddress: getCoordinateFromAddress
            };

            return factory;

            function loadAllSuppliers() {
                console.log('Fetching all suppliers');
                var deferred = $q.defer();
                $http.get(urls.SUPPLIER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all suppliers');
                            $localStorage.suppliers = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading suppliers');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getCoordinateFromAddress(address){
            	console.log('get coordinate from :'+address);
                var deferred = $q.defer();
                $http.get(urls.GOOGLE_MAP_API + address + urls.KEY)
                    .then(
                        function (response) {
                            console.log('API map google :'+ response);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while API map google :'+ address);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getAllSuppliers(){
                return $localStorage.suppliers;
            }

            function getSupplier(id) {
                console.log('Fetching Supplier with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.SUPPLIER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Supplier with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading Supplier with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createSupplier(supplier) {
                console.log('Creating supplier');
                var deferred = $q.defer();
                $http.post(urls.SUPPLIER_SERVICE_API, supplier)
                    .then(
                        function (response) {
                            loadAllSuppliers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating Supplier : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateSupplier(supplier, id) {
                console.log('Updating Supplier with id '+id);
                var deferred = $q.defer();
                $http.put(urls.SUPPLIER_SERVICE_API + id, supplier)
                    .then(
                        function (response) {
                            loadAllSuppliers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Supplier with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeSupplier(id) {
                console.log('Removing Supplier with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.SUPPLIER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllSuppliers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Supplier with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);