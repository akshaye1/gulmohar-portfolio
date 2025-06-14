"use client";

import React, { useState } from "react"; // Correctly import useState
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { Button } from "../ui/button";

interface VideoPlayerModalProps {
  videoUrl: string;
  title: string;
  triggerLabel?: string;
  triggerIcon?: React.ReactNode;
}

export default function VideoPlayerModal({
  videoUrl,
  title,
  triggerLabel = "Watch Video",
  triggerIcon = <PlayCircle className="mr-2 h-5 w-5" />,
}: VideoPlayerModalProps) {
  const [isOpen, setIsOpen] = useState(false); // Use imported useState

  // Basic URL validation for YouTube embeds
  // Accept both youtube.com/embed and youtu.be or youtube.com/watch?v= links
  let embedUrl = videoUrl;
  let isYouTubeUrl = false;
  if (
    videoUrl.includes("youtube.com/watch?v=") ||
    videoUrl.includes("youtu.be/")
  ) {
    // Convert to embed URL
    const videoIdMatch = videoUrl.match(
      /(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/
    );
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    if (videoId) {
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
      isYouTubeUrl = true;
    }
  } else if (videoUrl.includes("youtube.com/embed")) {
    isYouTubeUrl = true;
    embedUrl = videoUrl;
  } else if (videoUrl.includes("youtube.com/shorts/")) {
    // Convert YouTube Shorts URL to embed format
    const shortsIdMatch = videoUrl.match(/youtube\.com\/shorts\/([\w-]+)/);
    const shortsId = shortsIdMatch ? shortsIdMatch[1] : null;
    if (shortsId) {
      embedUrl = `https://www.youtube.com/embed/${shortsId}`;
      isYouTubeUrl = true;
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className="bg-primary/80 hover:bg-primary text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
        >
          {triggerIcon}
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 border-0 bg-black/80 backdrop-blur-sm rounded-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video">
          {isYouTubeUrl ? (
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          ) : (
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              className="rounded-lg"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
