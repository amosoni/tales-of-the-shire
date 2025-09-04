"use client";

import React, { useEffect, useState } from "react";

type Props = {
  id: string;
  name: string;
  className?: string;
  size?: number;
};

export default function NpcAvatar({ id, name, className = "", size = 112 }: Props) {
  const localSrc = `/images/npcs/${id}.jpg`;
  const fallbackSrc = `https://api.dicebear.com/8.x/fun-emoji/svg?seed=${encodeURIComponent(name)}`;
  const [src, setSrc] = useState(fallbackSrc);

  // Test local image; if存在则替换，避免首次渲染显示 ALT 文本
  useEffect(() => {
    const img = new Image();
    img.onload = () => setSrc(localSrc);
    img.onerror = () => setSrc(fallbackSrc);
    img.src = localSrc;
  }, [localSrc, fallbackSrc]);

  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={`rounded-full object-cover shadow ${className}`}
    />
  );
} 