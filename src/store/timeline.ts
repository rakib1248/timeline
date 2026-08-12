import { postType } from "@/type/post.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TimelinesState {
  post: postType[];

  addPost: (todo: postType) => void;
  removePost: (id: number) => void;
  updatePost: (id: number, updated: postType) => void;
}

export const useTimeline = create<TimelinesState>()(
  persist(
    (set) => ({
      post: [] as postType[],

      addPost: (post: postType) =>
        set((state) => ({ post: [post, ...state.post] })),

      removePost: (id: number) =>
        set((state) => ({ post: state.post.filter((p) => p.id !== id) })),

      updatePost: (id: number, updated: postType) =>
        set((state) => ({
          post: state.post.map((item) => (item.id === id ? updated : item)),
        })),
    }),
    { name: "posts" },
  ),
);
