ToDoList.controller('ToDoController', ['$scope', function($scope) {

  $scope.todos = [];

  $scope.submitTodo = function(){
    $scope.todos.push({'title':$scope.newTodo});
  };

}]);
