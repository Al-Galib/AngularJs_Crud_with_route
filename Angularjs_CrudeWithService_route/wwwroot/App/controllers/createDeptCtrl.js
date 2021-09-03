angular.module("employeeApp")
    .controller("createDeptCtrl", ($scope, $http) => {
        $scope.modelError = "";
        $scope.insertDept = f => {
            console.log($scope.deptObj);
            $http.post("/api/Departments", $scope.deptObj)
                .then(r => {
                    $scope.model.departments.push(r.data);
                    $scope.deptObj = {};
                    f.$setPristine();
                    f.$setUntouched();
                    $scope.modelError = "Data saved."
                }, err => {
                    $scope.modelError ="Failed to insert data."
                });
        }
    });