/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/immutability */
import { useTimeline } from "@/store/timeline";

import { PostFormModal } from "./PostFormModal";

/* eslint-disable react/no-unescaped-entities */

type PostComposerProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export function PostComposer({ isOpen, setIsOpen }: PostComposerProps) {
  const addPost = useTimeline((state) => state.addPost);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PostFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="New post"
        buttonMsg="Post"
        postData={null}
        onSubmit={(data) => addPost({ ...data, time: Date.now()})}
      />
    </>
  );
}
