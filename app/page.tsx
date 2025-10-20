"use client";

import CreateTodo from "@/components/todos/CreateTodo";
import TodoList from "@/components/todos/TodoList";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <CreateTodo />
        <TodoList />
      </div>
    </div>
  );
}
