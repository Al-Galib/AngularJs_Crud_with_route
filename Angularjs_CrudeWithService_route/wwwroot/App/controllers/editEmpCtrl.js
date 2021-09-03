angular.module("employeeApp")
    .controller("editEmpCtrl", ($scope, $http, $routeParams) => {
        $scope.modelError = "";
        var id = $routeParams.id;
        console.log(id);
        var obj = $scope.model.employees.find(emp => emp.employeeId == id);
        
        angular.copy(obj, $scope.empObj);
        
        console.log($scope.empObj);
        $scope.updateEmployee = f => {
            console.log($scope.deptObj);
            $http.put("/api/Employees/" + $scope.empObj.employeeId, $scope.empObj)
                .then(r => {
                    var i = $scope.model.employees.findIndex(emp => emp.employeeId == $scope.empObj.employeeId);
                    angular.copy($scope.empObj, $scope.model.employees[i]);
                    
                    f.$setPristine();
                    f.$setUntouched();
                    $scope.modelError = "Data saved."
                   // $scope.empObj = {};
                }, err => {
                    $scope.modelError = "Failed to update data."
                });
        }
    });