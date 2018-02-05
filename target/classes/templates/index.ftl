<!DOCTYPE html>
<html lang="en" ng-app="supplier">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>${title}</title>
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/app.css" rel="stylesheet"/>
    </head>
    <body>

        <div ui-view></div>
        <script src="js/lib/angular.min.js" ></script>
        <script src="js/lib/angular-ui-router.min.js" ></script>
        <script src="js/lib/localforage.min.js" ></script>
        <script src="js/lib/ngStorage.min.js"></script>
        <script src="js/app/App.js"></script>
        <script src="js/app/SupplierService.js"></script>
        <script src="js/app/SupplierController.js"></script>
    </body>
</html>