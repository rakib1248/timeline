/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { postType } from "@/type/post.type";
import { ImagePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { Modal } from "./modal";

/* eslint-disable react/no-unescaped-entities */

type PostFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  buttonMsg: string;
  postData?: Pick<postType, "id" | "name" | "image" | "text"> | null;
  onSubmit: (data: {
    id: number;
    name: string;
    image: string;
    text: string;
  }) => void;
};

export function PostFormModal({
  isOpen,
  onClose,
  title,
  buttonMsg,
  postData,
  onSubmit,
}: PostFormModalProps) {
  type FormState = {
    name: string;
    image: string;
    text: string;
  };
  const [form, setForm] = useState<FormState>({
    name: "",
    image: "",
    text: "",
  });
  const [imageError, setImageError] = useState(false);
  const { name, image, text } = form;

  useEffect(() => {
    if (isOpen) {
      setForm({
        name: postData?.name ?? "",
        image: postData?.image ?? "",
        text: postData?.text ?? "",
      });
      setImageError(false);
    }
  }, [isOpen, postData]);

  const canSubmit = name.trim() !== "" && text.trim() !== "";

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit({
      id: postData?.id ?? Date.now(),
      name: name.trim(),
      image: imageError ? "" : image.trim(),
      text: text.trim(),
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <input
        value={name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Your name"
        className="mb-2 w-full rounded-sm border border-[#E8E1D3] bg-white px-3 py-2 text-[14px] text-[#1E2A22] placeholder:text-[#B0A98F] focus:border-[#3E5C4A] focus:outline-none"
      />

      <input
        value={image}
        onChange={(e) => {
          setForm({ ...form, image: e.target.value });
          setImageError(false);
        }}
        placeholder="Image link (optional)"
        className="mb-2 w-full rounded-sm border border-[#E8E1D3] bg-white px-3 py-2 text-[14px] text-[#1E2A22] placeholder:text-[#B0A98F] focus:border-[#3E5C4A] focus:outline-none"
      />

      {image && !imageError && (
        <div className="mb-2 overflow-hidden rounded-sm border border-[#E8E1D3]">
          <img
            src={image}
            alt="Preview"
            className="h-32 w-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      {image && imageError && (
        <p className="mb-2 flex items-center gap-1.5 text-xs text-[#A34A3D]">
          <ImagePlus size={13} /> Couldn't load that image link
        </p>
      )}

      <textarea
        value={text}
        onChange={(e) => setForm({ ...form, text: e.target.value })}
        placeholder="What's on your shelf?"
        rows={3}
        className="mb-3 w-full resize-none rounded-sm border border-[#E8E1D3] bg-white px-3 py-2 text-[14px] text-[#1E2A22] placeholder:text-[#B0A98F] focus:border-[#3E5C4A] focus:outline-none"
      />

      <div className="flex gap-2">
        <button
          onClick={onClose}
          className="flex-1 rounded-sm border border-[#E8E1D3] py-2 text-[13px] font-semibold text-[#7A7566] transition-colors hover:bg-[#F0EBDF]">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="flex-1 rounded-sm bg-[#3E5C4A] py-2 text-[13px] font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40">
          {buttonMsg}
        </button>
      </div>
    </Modal>
  );
}
