<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Thông tin của hàng </span></div>
		<div class="panel-body">
	        <div class="formcontainer">
	            <div class="alert alert-success" role="alert" ng-if="ctrl.successMessage">{{ctrl.successMessage}}</div>
	            <div class="alert alert-danger" role="alert" ng-if="ctrl.errorMessage">{{ctrl.errorMessage}}</div>
	            <form ng-submit="ctrl.submit()" name="myForm" class="form-horizontal">
	                <input type="hidden" ng-model="ctrl.supplier.supplier_id" />
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="uname">Tên</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="ctrl.supplier.name" id="uname" class="username form-control input-sm" placeholder="Nhập tên quán" required ng-minlength="3"/>
	                        </div>
	                    </div>
	                </div>

	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="age">Địa chỉ</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="ctrl.supplier.address" id="address" class="form-control input-sm" placeholder="Nhập địa chỉ quán"/>
	                        </div>
	                    </div>
	                </div>
	
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="salary">Miêu tả</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="ctrl.supplier.description" id="description" class="form-control input-sm" placeholder="Nhập miêu tả quán"/>
	                        </div>
	                    </div>
	                </div>
                    <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="type">Loại hình</label>
	                        <div class="col-md-7">
	                            <select ng-model="ctrl.supplier.type_id" ng-options="x for (x, y) in ctrl.types">
								</select>
	                        </div>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="Status">Hiện trang</label>
	                        <div class="col-md-7">
	                            <select ng-model="ctrl.supplier.status" ng-options="x for (x, y) in ctrl.statusMap">
								</select>
	                        </div>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="form-actions floatRight">
	                        <input type="submit"  value="{{!ctrl.supplier.supplier_id ? 'Add' : 'Update'}}" class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid || myForm.$pristine">
	                        <button type="button" ng-click="ctrl.reset()" class="btn btn-warning btn-sm" ng-disabled="myForm.$pristine">Reset Form</button>
	                    </div>
	                </div>
	            </form>
    	    </div>
		</div>	
    </div>
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Danh sách các cửa hàng</span></div>
        {{ctrl.supplier}}
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th>Tên</th>
		                <th>Địa chỉ</th>
		                <th>Miêu tả</th>
		                <th>Loại hình</th>
		                <th>Tình trạng</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr ng-repeat="u in ctrl.getAllSuppliers()">
		                <td>{{u.supplier_id}}</td>
		                <td>{{u.name}}</td>
		                <td>{{u.address}}</td>
		                <td>{{u.description}}</td>
		                <td>{{ctrl.arrayType[u.type_id]}}</td>
		                 <td>{{ctrl.arrayStatus[u.status]}}</td>
		                <td><button type="button" ng-click="ctrl.editSupplier(u.supplier_id)" class="btn btn-success custom-width">Sửa</button></td>
		                <td><button type="button" ng-click="ctrl.removeSupplier(u.supplier_id)" class="btn btn-danger custom-width">Xóa</button></td>
		            </tr>
		            </tbody>
		        </table>		
			</div>
		</div>
    </div>
</div>