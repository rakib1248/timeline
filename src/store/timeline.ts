import { postType } from "@/type/post.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

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

      addPost: (post: postType) => {
        set((state) => ({ post: [post, ...state.post] }));
        toast.success("Post published", {
          description: `${post.name}'s post is now live on the feed.`,
        });
      },

      removePost: (id: number) => {
        set((state) => ({ post: state.post.filter((p) => p.id !== id) }));

        toast("Post deleted", {
          description: "The post has been removed from your feed.",
        });
      },

      updatePost: (id: number, updated: postType) => {
        set((state) => ({
          post: state.post.map((item) => (item.id === id ? updated : item)),
        }));
            toast.success("Post updated", {
              description: "Your changes have been saved.",
            });
      },
    }),
    { name: "posts" },
  ),
);
