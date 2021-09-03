angular.module("employeeApp")
    .controller("createEmpCtrl", ($scope, $http) => {
        $scope.modelError = "";
        $scope.insertEmp = f => {
            console.log($scope.empObj);
            $http.post("/api/Employees", $scope.empObj)
                .then(r => {
                    $scope.model.employees.push(r.data);
                    $scope.empObj = {};
                    f.$setPristine();
                    f.$setUntouched();
                    $scope.modelError = "Data saved."
                }, err => {
                    $scope.modelError = "Failed to insert data."
                });
        }
    });