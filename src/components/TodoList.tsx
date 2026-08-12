"use client";

import { useTodosStore } from "@/store/todos";



interface TodoListProps {
  setEditIndex: (index: number | null) => void;
}

export default function TodoList({ setEditIndex }: TodoListProps) {
  const { todos, removeTodo } = useTodosStore();

  if (todos.length === 0) return <p className="mt-4">Kono todo nai.</p>;

  return (
    <div className="mt-4 flex flex-col gap-2">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="border p-3 rounded flex justify-between items-center">
          <div>
            <p>
              <strong>{todo.name}</strong>
            </p>
            <p className="text-sm text-gray-600">{todo.email}</p>
            {todo.phone && (
              <p className="text-sm text-gray-600">{todo.phone}</p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setEditIndex(index)}
              className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">
              Edit
            </button>
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
