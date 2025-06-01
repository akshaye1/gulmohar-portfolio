
import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/lib/data';

export const metadata = {
  title: 'Our Portfolio - Gulmohar Production',
  description: 'Explore Gulmohar Production\'s portfolio of video editing, motion graphics, and other creative projects.',
};

export default function WorkPage() {
  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Our Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover a selection of our finest work, showcasing our passion for visual storytelling and technical excellence in video editing and motion graphics.
        </p>
      </header>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
