import { create } from "zustand";

export interface Todo {
  name: string;
  email: string;
  phone?: string;
}

interface TodosState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (index: number) => void;
  updateTodo: (index: number, updated: Todo) => void;
}

export const useTodosStore = create<TodosState>((set, get) => ({
  todos: [],

  addTodo: (todo) => {
    if (!todo.name || !todo.email) {
      alert("Name and email are required");
      return;
    }

    const existingTodo = get().todos.find((t) => t.email === todo.email);
    if (existingTodo) {
      alert("A todo with this email already exists");
      return;
    }

    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },

  removeTodo: (index) => {
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    }));
  },

  updateTodo: (index, updated) => {
    if (!updated.name || !updated.email) {
      alert("Name and email are required");
      return;
    }

    const existingTodo = get().todos.find((t, i) => t.email === updated.email && i !== index);
    if (existingTodo) {
      alert("A todo with this email already exists");
      return;
    }

    set((state) => ({ 
      todos: state.todos.map((t, i) => (i === index ? updated : t)),
    }));
  },
}));
