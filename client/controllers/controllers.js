myApp.controller('empController', function ($scope, $route, $routeParams, $http) {


    $scope.getEmployees = function () {
        $http.get('/employees').then(function (response) {
            console.log("1");
            $scope.employees = response.data;
        });
    };

    $scope.showEmployee = function () {
        var id = $routeParams.id;
        $http.get('/employees/' + id).then(function (response) {
            console.log("2");
            $scope.employee = response.data;
        });
    };

    console.log("out");
    $scope.addEmployee = function () {
        console.log("adddd");
        //var id = $routeParams.id;
        $http.post('/employees/',
            $scope.employee).then(function (response) {
            console.log("3");
            // $scope.employee = response.data;
            window.location.href = '/';
        });
    };

    $scope.updateEmployee = function () {
        var id = $routeParams.id;
        $http.put('/employees/' + id, $scope.employee).then(function (response) {
            console.log("4");
            //$scope.employee = response.data;
            window.location.href = '/';
        });
    };

    $scope.deleteEmployee = function (id) {
        console.log('delete', id)
        //var id = id;
        var result = confirm('Are you sure?');
        if (result == true) {
            $http.delete('/employees/' + id).then(function (response) {
                console.log("5");
                //$scope.employee = response.data;
                $route.reload();
                // window.location.href = '/';
            });
        }
    };



})

.controller('create', function($scope, $route, $routeParams, $http){
    console.log("create");
    $scope.addEmployee = function () {
        console.log("adddd");
        //var id = $routeParams.id;
        $http.post('/employees/',
            $scope.employee).then(function (response) {
            console.log("3");
            // $scope.employee = response.data;
            window.location.href = '/';
        });
    };
})