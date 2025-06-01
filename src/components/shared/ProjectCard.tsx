import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react'; // Added Eye icon

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-card shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out group">
      <CardHeader className="p-0 relative">
        <Link href={`/work/${project.id}`} aria-label={`View project ${project.title}`}>
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.thumbnailUrl}
              alt={`Thumbnail for ${project.title}`}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Eye className="h-12 w-12 text-white/80 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
            </div>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Link href={`/work/${project.id}`} aria-label={`View project ${project.title}`}>
          <CardTitle className="text-xl lg:text-2xl font-headline mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 h-auto text-primary hover:underline group-hover:text-accent transition-colors duration-300">
          <Link href={`/work/${project.id}`}>
            View Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

interface ProjectCardProps {
  project: Project;
}
