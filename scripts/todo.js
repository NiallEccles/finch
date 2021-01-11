class Todo {
  constructor(name, tag, todoItem) {
    this.id = Math.floor(Math.random() * (12345 + 1) + 1);
    this.name = name;
    this.tag = tag;
    this.todoItem = todoItem;
    // console.log({ name: this.name, tag: this.tag, todo: this.todoItem });
  }
}

export default Todo;
