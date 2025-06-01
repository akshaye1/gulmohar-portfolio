import { projects } from '@/lib/data';
import type { Project } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import VideoPlayerModal from '@/components/shared/VideoPlayerModal';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, Briefcase, Settings2 } from 'lucide-react';

interface ProjectDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === params.id);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} - Filmic Visions`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }
  const dataAiHint = project.thumbnailUrl.includes('placehold.co') ? project.dataAiHint || 'creative video detail' : undefined;


  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-center">{project.title}</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">{project.description}</p>
      </header>

      <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
        <Image
          src={project.thumbnailUrl}
          alt={`Promotional image for ${project.title}`}
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint={dataAiHint}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <VideoPlayerModal videoUrl={project.videoUrl} title={project.title} />
        </div>
      </div>

      <Separator />

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">About the Project</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80">
            <p>{project.longDescription || project.description}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Project Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span className="text-sm"><strong className="font-medium">Date:</strong> {project.date}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-sm"><strong className="font-medium">Client:</strong> {project.client || 'N/A'}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Settings2 className="h-5 w-5 text-primary" />
              <span className="text-sm"><strong className="font-medium">Category:</strong> {project.category}</span>
            </div>
            {project.services && project.services.length > 0 && (
              <div>
                <strong className="font-medium text-sm block mb-2">Services:</strong>
                <div className="flex flex-wrap gap-2">
                  {project.services.map(service => (
                    <Badge key={service} variant="secondary">{service}</Badge>
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
