'use strict';

angular.module('supplier').controller('SupplierController',
    ['SupplierService', '$scope',  function( SupplierService, $scope) {

        var self = this;
        self.supplier = {};
        self.suppliers=[];
        self.submit = submit;
        self.getAllSuppliers = getAllSuppliers;
        self.getCoordinateFromAddress = getCoordinateFromAddress;
        self.createSupplier = createSupplier;
        self.updateSupplier = updateSupplier;
        self.removeSupplier = removeSupplier;
        self.editSupplier = editSupplier;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;
        self.coordinate = {};
        
        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;
        
        self.types = {
        		"Đồ ăn nhanh" :0,
        		"Đồ uống" :1,
        		"Đồ ăn sáng" :2,
        		"Quần áo":3,
        		"Phụ tùng xe cộ":4,
        		"Giầy dép":5,
        		"Cầm đồ":6,
        		"Rửa xe":7,
        		"Sửa chữa điện thoại":8,
        		"Bán kính mắt":9,
        		"Nha sĩ":10,
        		"Bán thuốc":11,
        		"Vật liệu xây dựng":12,
        		"Nhà nghỉ":13
            }
        self.arrayType=["Đồ ăn nhanh", "Đồ uống", "Đồ ăn sáng","Quân áo", "Phụ tùng xe cộ", "Giầy dép", "Cầm đồ", "Rửa xe", "Sửa chữa điện thoại", "Bán kính mắt","Nha sĩ", "Bán thuốc", "Vật liệu xây dựng", "Nhà nghỉ"];
        self.statusMap = {
        		"Hoạt động" :0,
        		"Đóng của" :1,
        		"Tạm ngưng" :2
            }
        self.arrayStatus=["Hoạt động", "Đóng của", "Tạm ngưng"];

        function submit() {
            console.log('Submitting');
            if (self.supplier.supplier_id === undefined || self.supplier.supplier_id === null) {
                console.log('Saving New Supplier', self.supplier);
                getCoordinateFromAddress(self.supplier.address);
                createSupplier(self.supplier);
            } else {
                updateSupplier(self.supplier, self.supplier.supplier_id);
                console.log('Supplier updated with id ', self.supplier.supplier_id);
            }
        }
        
        function getCoordinateFromAddress(address){
        	 console.log('getCoordinateFromAddress');
             SupplierService.getCoordinateFromAddress(address)
                 .then(
                     function (response) {
                         console.log('getCoordinateFromAddress successfully');
                         self.coordinate = response;
                         self.supplier.coordinate = self.coordinate;
                     },
                     function (errResponse) {
                         console.error('Error while creating Supplier');
                         self.errorMessage = 'Error while creating Supplier: ' + errResponse.data.errorMessage;
                         self.successMessage='';
                     }
                 );
        }

        function createSupplier(supplier) {
            console.log('About to create supplier');
            SupplierService.createSupplier(supplier)
                .then(
                    function (response) {
                        console.log('Supplier created successfully');
                        self.successMessage = 'Supplier created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.supplier = {};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Supplier');
                        self.errorMessage = 'Error while creating Supplier: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateSupplier(supplier, id){
            console.log('About to update supplier');
            SupplierService.updateSupplier(supplier, id)
                .then(
                    function (response){
                        console.log('Supplier updated successfully');
                        self.successMessage='Supplier updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating S');
                        self.errorMessage='Error while updating S '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeSupplier(id){
            console.log('About to remove S with id '+id);
            SupplierService.removeSupplier(id)
                .then(
                    function(){
                        console.log('Supplier '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing supplier '+id +', Error :'+errResponse.data);
                    }
                );
        }


        function getAllSuppliers(){
            return SupplierService.getAllSuppliers();
        }

        function editSupplier(id) {
            self.successMessage='';
            self.errorMessage='';
            SupplierService.getSupplier(id).then(
                function (supplier) {
                    self.supplier = supplier;
                },
                function (errResponse) {
                    console.error('Error while removing supplier ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.supplier={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);