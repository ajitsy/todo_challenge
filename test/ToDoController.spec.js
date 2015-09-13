describe('ToDoListController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('Karma Test', function() {
    expect(ctrl.Test).toBeUndefined();
  });


});
