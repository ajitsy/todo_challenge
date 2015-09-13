describe('ToDo List', function() {

var todos = element.all(by.repeater('todo in todos'));

var inputBox = element(by.model('newTodo'));
var createButton = element(by.className('btn'));

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('ToDo List App');
  });

  it('should add a todo item', function() {
    expect(todos.count()).toBe(0);
    inputBox.sendKeys('task 2');
    element(by.css('button')).click();
    expect(todos.count()).toBe(1);
    expect(todos.last().getText()).toEqual('task 2');
  });

});
