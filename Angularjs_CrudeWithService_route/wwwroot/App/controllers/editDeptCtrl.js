angular.module("employeeApp")
    .controller("editDeptCtrl", ($scope, $http, $routeParams) => {
        $scope.modelError = "";
        var id = $routeParams.id;
        console.log(id);
        $scope.deptObj = $scope.model.departments.find(d => d.departmentId == id);
        console.log($scope.deptObj);
        $scope.updateDept = f => {
            console.log($scope.deptObj);
            $http.put("/api/Departments/" + $scope.deptObj.departmentId, $scope.deptObj)
                .then(r => {
                    var i = $scope.model.departments.findIndex(d => d.departmentId == id);
                    angular.copy($scope.deptObj, $scope.model.departments[i]);
                    
                    f.$setPristine();
                    f.$setUntouched();
                    $scope.modelError = "Data saved."
                }, err => {
                    $scope.modelError = "Failed to insert data."
                });
        }
    });