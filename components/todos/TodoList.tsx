import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTodo } from "@/lib/hooks/useTodo";
import { Trash2 } from "lucide-react";

export default function TodoList() {
  const { todos, removeTodo } = useTodo();

  return (
    <Card className="mb-8">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">
            My Todos
          </CardTitle>

          {todos.length > 0 && (
            <Badge
              variant="outline"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-zinc-800"
            >
              {todos.length}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {todos.length === 0 ? (
          <p className="text-gray-400 dark:text-gray-500 text-center py-8">
            No todos yet. Create one above!
          </p>
        ) : (
          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 rounded-md px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                <span className="text-gray-800 dark:text-gray-100 font-medium truncate">
                  {todo.name}
                </span>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
