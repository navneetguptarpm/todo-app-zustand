import { useTodoStores } from "@/lib/stores/useTodoStores";

export const useTodo = () => {
  const todos = useTodoStores((state) => state.todos);
  const error = useTodoStores((state) => state.error);
  const addTodo = useTodoStores((state) => state.addTodo);
  const removeTodo = useTodoStores((state) => state.removeTodo);

  return { todos, error, addTodo, removeTodo };
};
