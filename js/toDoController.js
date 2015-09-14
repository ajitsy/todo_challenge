ToDoList.controller('ToDoController', ['$scope', function($scope) {

  $scope.todos = [];

  $scope.submitTodo = function(){
    $scope.todos.push({'title':$scope.newTodo, 'complete':false});
    $scope.newTodo = '';
  };
  $scope.clearCompletedTasks = function(){
    $scope.todos = $scope.todos.filter(function(task){
      return !task.complete;
    });
  };
  $scope.completedTasks = function(){
    $scope.todos = $scope.todos.filter(function(task){
      return task.complete;
    });
  };
  $scope.allTasks = function(){
    return $scope.todos;

  };


}]);
