"use client";

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
  triggerIcon = <PlayCircle className="mr-2 h-5 w-5" /> 
}: VideoPlayerModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Basic URL validation for YouTube embeds
  const isYouTubeUrl = videoUrl.includes("youtube.com/embed");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="lg">
          {triggerIcon}
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 border-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video">
          {isYouTubeUrl ? (
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          ) : (
            <video width="100%" height="100%" controls autoPlay className="rounded-md">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Helper to check if React is defined before using its methods
const React = {
  useState: (initialState: any) => {
    if (typeof window !== 'undefined') {
      return (window as any).React.useState(initialState);
    }
    // Fallback for server-side rendering or when React is not available on window
    let state = initialState;
    const setState = (newState: any) => { state = newState; };
    return [state, setState];
  },
};
if (typeof window !== 'undefined' && !(window as any).React) {
  (window as any).React = React;
}
