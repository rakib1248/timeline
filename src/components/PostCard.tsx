/* eslint-disable react-hooks/purity */
"use client";

import { useTimeline } from "@/store/timeline";
import { postType } from "@/type/post.type";
import { Heart, MessageCircle, Pencil, Share2, Trash2 } from "lucide-react";
import { useState } from "react";
import { PostFormModal } from "./PostFormModal";
import { formatDistanceToNow } from "date-fns";

const SPINE_COLORS = ["#A34A3D", "#3E5C4A", "#2C4A6B", "#C08A28", "#6B4C6B"];
function initialsForName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
export function colorForName(name: string) {
  const sum = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return SPINE_COLORS[sum % SPINE_COLORS.length];
}

export function PostCard({ post }: { post: postType }) {
  const { removePost, updatePost } = useTimeline((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  const color = colorForName(post.name);

  function safeTimeAgo(time: number) {
     const diffMs = Date.now() - time;
     const diffSec = Math.floor(diffMs / 1000);

     if (diffSec < 60) return "Just now";

     return formatDistanceToNow(new Date(time), { addSuffix: true });
  }

  return (
    <article
      className="overflow-hidden rounded-sm border border-[#E8E1D3] bg-white shadow-[0_1px_2px_rgba(30,42,34,0.04)] transition-shadow hover:shadow-[0_4px_14px_rgba(30,42,34,0.08)]"
      style={{ borderLeft: `4px solid ${color}` }}>
      <div className="flex items-start gap-3 px-4 pt-4">
        {/* post edit modal */}

        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: color, fontFamily: "'Fraunces', serif" }}>
          {initialsForName(post.name)}
        </div>
        <div className="min-w-0 flex-1 ">
          <div className="flex items-baseline gap-2">
            <p
              className="truncate text-[15px] font-semibold text-[#1E2A22]"
              style={{ fontFamily: "'Fraunces', serif" }}>
              {post.name}
            </p>
            <span
              className="flex-shrink-0 text-[11px] text-[#9A9384]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {safeTimeAgo(post.time)};
            </span>
          </div>
          <p className="mt-1 text-[14px] leading-relaxed text-[#3A362E]">
            {post.text}
          </p>
        </div>

        {/* Edit / Delete */}
        <div className="flex flex-shrink-0 gap-1">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Edit post"
            className="rounded-sm p-1.5 text-[#9A9384] transition-colors hover:bg-[#FBF9F4] hover:text-[#2C4A6B]">
            <Pencil size={14} />
          </button>

          <PostFormModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Edit post"
            buttonMsg="Save Change"
            postData={post}
            onSubmit={(data) => updatePost(data.id, { ...post, ...data })}
          />

          <button
            onClick={() => removePost(post.id)}
            aria-label="Delete post"
            className="rounded-sm p-1.5 text-[#9A9384] transition-colors hover:bg-[#FBF9F4] hover:text-[#A34A3D]">
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {post.image && (
        <div className="mt-3 w-full">
          <img
            src={post.image}
            alt=""
            className="h-56 w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="flex items-center gap-5 border-t border-[#F0EBDF] px-4 py-3">
        <button className="flex items-center gap-1.5 text-[#7A7566] transition-colors hover:text-[#A34A3D]">
          <Heart size={15} strokeWidth={2} />
          <span className="text-xs font-medium">Like</span>
        </button>
        <button className="flex items-center gap-1.5 text-[#7A7566] transition-colors hover:text-[#2C4A6B]">
          <MessageCircle size={15} strokeWidth={2} />
          <span className="text-xs font-medium">Comment</span>
        </button>
        <button className="flex items-center gap-1.5 text-[#7A7566] transition-colors hover:text-[#3E5C4A]">
          <Share2 size={15} strokeWidth={2} />
          <span className="text-xs font-medium">Share</span>
        </button>
      </div>
    </article>
  );
}
