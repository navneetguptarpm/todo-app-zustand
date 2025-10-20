import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTodo } from "@/lib/hooks/useTodo";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function CreateTodo() {
  const [input, setInput] = useState("");
  const { error, addTodo } = useTodo();

  const handleAddTodo = () => {
    addTodo({ name: input });
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 mb-8 transition-colors">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Create New Todo
      </h2>

      <div className="flex gap-3">
        <div className="flex-1">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter todo name..."
            className={cn(error ? "border-red-500" : "", "h-10")}
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>

        <Button
          onClick={handleAddTodo}
          className="flex items-center gap-2 h-10"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">Add</span>
        </Button>
      </div>
    </div>
  );
}
