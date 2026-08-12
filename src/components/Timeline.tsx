/* eslint-disable react/no-unescaped-entities */
"use client";

import { BookOpen, PenLine } from "lucide-react";

import { PostCard } from "./PostCard";
import {  useTimeline } from "@/store/timeline";
import { PostComposer } from "./PostForm";
import { useState } from "react";


function Timeline() {
  const { post } = useTimeline((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const posts = [...post];

  // const addPost = (newPost: postType) => {
  //   setPosts((prev) => [newPost, ...prev]);
  // };

  return (
    <div
      className="flex h-screen w-full flex-col items-center bg-[#F5F1E8]"
      style={{ fontFamily: "'Inter', sans-serif" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@500&display=swap"
      />

      <header className="sticky top-0 z-10 flex w-full max-w-xl items-center gap-2 border-b border-[#E8E1D3] bg-[#F5F1E8]/90 px-4 pb-3 pt-5 backdrop-blur">
        <BookOpen size={20} color="#3E5C4A" />
        <h1
          className="text-2xl font-semibold text-[#1E2A22]"
          style={{ fontFamily: "'Fraunces', serif" }}>
          Shelf Feed
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="absolute right-16 flex items-center gap-1.5 rounded-sm bg-[#3E5C4A] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#2F4838]">
          <PenLine size={14} />
          <span>New post</span>
        </button>
      </header>

      <div className="w-full max-w-xl flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-3 pb-6">
          <PostComposer isOpen={isOpen} setIsOpen={setIsOpen} />
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
