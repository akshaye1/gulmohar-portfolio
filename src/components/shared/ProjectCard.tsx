
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card } from '@/components/ui/card';

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-card shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out group">
      <Link href={`/work/${project.id}`} aria-label={`View project ${project.title}`} className="block w-full h-full">
        <div className="aspect-video relative w-full overflow-hidden">
          <Image
            src={project.thumbnailUrl}
            alt={`Thumbnail for ${project.title}`}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-300 ease-in-out">
            <h3 className="text-xl md:text-2xl font-bold font-headline text-white text-center shadow-sm transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </Card>
  );
}

interface ProjectCardProps {
  project: Project;
}
