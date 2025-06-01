import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/lib/data';
import type { Project } from '@/types';

export const metadata = {
  title: 'Our Portfolio - Gulmohar Production',
  description: 'Explore Gulmohar Production\'s portfolio, categorized by ADs, Video Production, Short Films, and Post Production highlights.',
};

const Section = ({ title, project }: { title: string, project: Project | null }) => {
  if (!project) {
    return (
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center md:text-left">
          {title}
        </h2>
        <p className="text-muted-foreground text-center md:text-left">No projects in this category yet.</p>
      </section>
    );
  }
  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center md:text-left">
        {title}
      </h2>
      <div className="max-w-xl mx-auto"> {/* Centering the single card and limiting its max width */}
        <ProjectCard project={project} />
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

  // Select only the first project for each category
  const firstAdProject = adProjects.length > 0 ? adProjects[0] : null;
  const firstVideoProductionProject = videoProductionProjects.length > 0 ? videoProductionProjects[0] : null;
  const firstShortFilmProject = shortFilmProjects.length > 0 ? shortFilmProjects[0] : null;
  const firstPostProductionProject = postProductionProjects.length > 0 ? postProductionProjects[0] : null;

  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Our Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover a highlight from each of our key service areas: ADs, Video Production, Short Films, and Post Production.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {firstAdProject && <ProjectCard project={firstAdProject} />}
        {firstVideoProductionProject && <ProjectCard project={firstVideoProductionProject} />}
        {firstShortFilmProject && <ProjectCard project={firstShortFilmProject} />}
        {firstPostProductionProject && <ProjectCard project={{...firstPostProductionProject, title: 'Post Production'}} />}
      </div>
    </div>
  );
}
