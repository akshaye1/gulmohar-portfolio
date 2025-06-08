"use client";

import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import VideoPlayerModal from "@/components/shared/VideoPlayerModal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Briefcase, Settings2 } from "lucide-react";
import React, { useState, use } from "react";

interface ProjectDetailPageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = React.use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-center">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          {project.description}
        </p>
      </header>

      {/* Render showcase videos if available, otherwise fallback to old cards */}
      {project.showcaseVideos ? (
        <CarouselGrid
          cards={project.showcaseVideos.map((video) => ({
            name: video.name,
            thumbnail: video.thumbnail,
            videoUrl: video.videoUrl,
          }))}
        />
      ) : (
        <CarouselGrid
          cards={[
            {
              name: "Nickelodeon",
              thumbnail:
                "https://img.youtube.com/vi/NEeHGQWsloI/maxresdefault.jpg",
              videoUrl: "https://youtu.be/NEeHGQWsloI?si=amh5mGMhtTL3jPEj",
            },
            {
              name: "house interior",
              thumbnail:
                "https://img.youtube.com/vi/TUTPyfurDDM/maxresdefault.jpg",
              videoUrl: "https://youtu.be/TUTPyfurDDM?si=7UdnhJhsRJmHg0mJ",
            },
            {
              name: "Blue cabinet interior",
              thumbnail:
                "https://img.youtube.com/vi/c6DIHphJCsw/maxresdefault.jpg",
              videoUrl: "https://youtu.be/c6DIHphJCsw?si=4sdVuGzgr2hXbBYs",
            },
            {
              name: "Juhu interior",
              thumbnail:
                "https://img.youtube.com/vi/_0r6NR6ohBM/maxresdefault.jpg",
              videoUrl: "https://youtu.be/_0r6NR6ohBM?si=pCVvU9qmRv-ZbUZ9",
            },
            {
              name: "Jeevan sathi apartment",
              thumbnail:
                "https://img.youtube.com/vi/wJQbF1B1PjU/maxresdefault.jpg",
              videoUrl: "https://youtu.be/wJQbF1B1PjU?si=txYHQ0KD-jzgdnja",
            },
          ]}
        />
      )}

      <Separator />

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">
              About the Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80">
            <p>{project.longDescription || project.description}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">
              Project Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="font-medium">Date:</strong> {project.date}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="font-medium">Client:</strong>{" "}
                {project.client || "N/A"}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Settings2 className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="font-medium">Category:</strong>{" "}
                {project.category}
              </span>
            </div>
            {project.services && project.services.length > 0 && (
              <div>
                <strong className="font-medium text-sm block mb-2">
                  Services:
                </strong>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// CarouselGrid component
type CarouselCard = {
  name: string;
  thumbnail: string;
  videoUrl: string;
};

interface CarouselGridProps {
  cards: CarouselCard[];
}

function CarouselGrid({ cards }: CarouselGridProps) {
  const [page, setPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const currentCards = cards.slice(
    page * cardsPerPage,
    (page + 1) * cardsPerPage
  );

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        {currentCards.map((card: CarouselCard) => (
          <Card
            key={card.name}
            className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl group"
          >
            <CardContent className="p-0">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={card.thumbnail}
                  alt={card.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity">
                  {card.name}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <VideoPlayerModal
                    videoUrl={card.videoUrl}
                    title={card.name}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-4 items-center">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="rounded-full bg-white/80 hover:bg-primary/80 text-primary hover:text-white shadow-lg w-10 h-10 flex items-center justify-center transition disabled:opacity-40 disabled:cursor-not-allowed border border-primary"
            aria-label="Previous"
          >
            <span className="sr-only">Previous</span>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`w-3 h-3 rounded-full border border-primary transition-all duration-200 ${
                  page === idx ? "bg-primary" : "bg-white"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="rounded-full bg-white/80 hover:bg-primary/80 text-primary hover:text-white shadow-lg w-10 h-10 flex items-center justify-center transition disabled:opacity-40 disabled:cursor-not-allowed border border-primary"
            aria-label="Next"
          >
            <span className="sr-only">Next</span>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
