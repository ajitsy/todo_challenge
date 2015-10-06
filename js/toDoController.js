ToDoList.controller('ToDoController', ['$scope', function($scope) {

  $scope.todos = [];
  todosvar = [];

  $scope.submitTodo = function(){
    $scope.todos.push({'title':$scope.newTodo, 'complete':false});
    todosvar.push({'title':$scope.newTodo, 'complete':false});
    $scope.newTodo = '';
  };

  $scope.clearCompletedTasks = function(){
    $scope.todos = todosvar;
    $scope.todos = $scope.todos.filter(function(task){
      return !task.complete;
    });
  };
  $scope.completedTasks = function(){
    $scope.todos = todosvar;
    $scope.todos = $scope.todos.filter(function(task){
      return task.complete;
    });
  };
  $scope.allTasks = function(){
    $scope.todos = todosvar;
    return $scope.todos;
  };

}]);
