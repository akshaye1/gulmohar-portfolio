import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import VideoPlayerModal from "@/components/shared/VideoPlayerModal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Briefcase, Settings2 } from "lucide-react";

interface ProjectDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} - Gulmohar Production`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id);

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
        <div className="grid md:grid-cols-2 gap-8">
          {project.showcaseVideos.map((video, idx) => {
            const isInstagram = video.videoUrl.includes("instagram.com");
            return (
              <Card
                key={video.name}
                className={`relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl group${
                  project.showcaseVideos &&
                  project.showcaseVideos.length % 2 !== 0 &&
                  idx === project.showcaseVideos.length - 1
                    ? " md:col-span-2"
                    : ""
                }`}
              >
                <CardContent className="p-0">
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.name}
                      layout="fill"
                      objectFit="cover"
                      priority
                      className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                    <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity">
                      {video.name}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {isInstagram ? (
                        <a
                          href={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 bg-white/90 text-black font-semibold rounded-lg shadow-lg hover:bg-white"
                        >
                          View on Instagram
                        </a>
                      ) : (
                        <VideoPlayerModal
                          videoUrl={video.videoUrl}
                          title={video.name}
                        />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: house interior */}
          <Card className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl group">
            <CardContent className="p-0">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/TUTPyfurDDM/maxresdefault.jpg"
                  alt="house interior"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity">
                  house interior
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <VideoPlayerModal
                    videoUrl="https://youtu.be/TUTPyfurDDM?si=7UdnhJhsRJmHg0mJ"
                    title="house interior"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Blue cabinet interior */}
          <Card className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl group">
            <CardContent className="p-0">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/c6DIHphJCsw/maxresdefault.jpg"
                  alt="Blue cabinet interior"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity">
                  Blue cabinet interior
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <VideoPlayerModal
                    videoUrl="https://youtu.be/c6DIHphJCsw?si=4sdVuGzgr2hXbBYs"
                    title="Blue cabinet interior"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Juhu interior */}
          <Card className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl group">
            <CardContent className="p-0">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/_0r6NR6ohBM/maxresdefault.jpg"
                  alt="Juhu interior"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity">
                  Juhu interior
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <VideoPlayerModal
                    videoUrl="https://youtu.be/_0r6NR6ohBM?si=pCVvU9qmRv-ZbUZ9"
                    title="Juhu interior"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Jeevan sathi apartment */}
          <Card className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl group">
            <CardContent className="p-0">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/wJQbF1B1PjU/maxresdefault.jpg"
                  alt="Jeevan sathi apartment"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:opacity-0 transition-opacity">
                  Jeevan sathi apartment
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <VideoPlayerModal
                    videoUrl="https://youtu.be/wJQbF1B1PjU?si=txYHQ0KD-jzgdnja"
                    title="Jeevan sathi apartment"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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
