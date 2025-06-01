
import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/lib/data';
import type { Project } from '@/types';

export const metadata = {
  title: 'Our Portfolio - Gulmohar Production',
  description: 'Explore Gulmohar Production\'s portfolio, categorized by ADs, Video Production, Short Films, and Post Production highlights.',
};

const Section = ({ title, projectsList }: { title: string, projectsList: Project[] }) => {
  if (!projectsList || projectsList.length === 0) {
    return (
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">
          {title}
        </h2>
        <p className="text-muted-foreground">No projects in this category yet.</p>
      </section>
    );
  }
  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project) => (
          <ProjectCard key={`${title}-${project.id}`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default function WorkPage() {
  const adProjects = projects.filter(p => p.category === 'Commercial');
  const shortFilmProjects = projects.filter(p => p.category === 'Short Film');
  const videoProductionProjects = projects.filter(p => p.category === 'Documentary' || p.category === 'Music Video');

  const postProductionServicesKeywords = [
    'editing', 
    'color grading', 
    'vfx', 
    'visual effects', 
    'sound design', 
    'post-production',
    'motion graphics',
    'color correction',
    '2d animation',
    '3d animation',
    'video editing'
  ];

  const postProductionProjects = projects.filter(p =>
    p.services?.some(service =>
      postProductionServicesKeywords.includes(service.toLowerCase())
    )
  );

  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Our Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover a selection of our finest work, categorized by ADs, Video Production, Short Films, and Post Production highlights.
        </p>
      </header>

      <Section title="AD" projectsList={adProjects} />
      <Section title="Video Production" projectsList={videoProductionProjects} />
      <Section title="Short Films" projectsList={shortFilmProjects} />
      <Section title="Post Production" projectsList={postProductionProjects} />
    </div>
  );
}
