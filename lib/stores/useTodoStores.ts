import { TodoStore } from "@/types/todo.types";
import { create } from "zustand";

export const useTodoStores = create<TodoStore>((set, get) => ({
  todos: [],
  error: "",
  addTodo: (todo) => {
    const { name } = todo;
    const trimmed = name.trim();
    if (!trimmed) return;

    const { todos } = get();

    const isDuplicate = todos.some(
      (todo) => todo.name.toLowerCase() === trimmed.toLowerCase()
    );

    if (isDuplicate) {
      set({ error: `Todo with "${todo.name}" name already exists.` });
      return;
    }

    set((state) => ({
      todos: [...state.todos, { id: crypto.randomUUID(), name: trimmed }],
      error: "",
    }));
  },
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));
