/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Todo, useTodosStore } from "@/store/todos";
import { useState, useEffect } from "react";


interface TodoFormProps {
  editIndex: number | null;
  setEditIndex: (index: number | null) => void;
}

export default function TodoForm({ editIndex, setEditIndex }: TodoFormProps) {
  const { todos, addTodo, updateTodo } = useTodosStore();

  const [form, setForm] = useState<Todo>({ name: "", email: "", phone: "" });

  // Edit mode e click korle form auto-fill hobe
  useEffect(() => {
    if (editIndex !== null) {
      setForm(todos[editIndex]);
    } else {
      setForm({ name: "", email: "", phone: "" });
    }
  }, [editIndex, todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editIndex !== null) {
      updateTodo(editIndex, form);
      setEditIndex(null);
    } else {
      addTodo(form);
    }

    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {editIndex !== null ? "Update Todo" : "Add Todo"}
      </button>
      {editIndex !== null && (
        <button
          type="button"
          onClick={() => setEditIndex(null)}
          className="text-sm text-gray-500 underline">
          Cancel Edit
        </button>
      )}
    </form>
  );
}
