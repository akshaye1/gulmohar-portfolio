import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link href={`/work/${project.id}`} aria-label={`View project ${project.title}`}>
          <div className="aspect-video relative">
            <Image
              src={project.thumbnailUrl}
              alt={`Thumbnail for ${project.title}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Link href={`/work/${project.id}`} aria-label={`View project ${project.title}`}>
          <CardTitle className="text-xl font-headline mb-2 hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 h-auto text-primary hover:underline">
          <Link href={`/work/${project.id}`}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
