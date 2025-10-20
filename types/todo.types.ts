export interface Todo {
  id: string;
  name: string;
}

export interface TodoStore {
  todos: Todo[];
  error: string;
  addTodo: (todo: Omit<Todo, "id">) => void;
  removeTodo: (id: string) => void;
}
