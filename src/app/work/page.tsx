import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export const metadata = {
  title: "Our Portfolio - Gulmohar Production",
  description:
    "Explore Gulmohar Production's portfolio, categorized by ADs, Video Production, Short Films, and Post Production highlights.",
};

const Section = ({
  title,
  project,
}: {
  title: string;
  project: Project | null;
}) => {
  if (!project) {
    return (
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center md:text-left">
          {title}
        </h2>
        <p className="text-muted-foreground text-center md:text-left">
          No projects in this category yet.
        </p>
      </section>
    );
  }
  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center md:text-left">
        {title}
      </h2>
      <div className="max-w-xl mx-auto">
        {/* Centering the single card and limiting its max width */}
        <ProjectCard project={project} />
      </div>
    </section>
  );
};

export default function WorkPage() {
  const adProjects = projects.filter((p) => p.category === "Commercial");
  const shortFilmProjects = projects.filter((p) => p.category === "Short Film");
  const videoProductionProjects = projects.filter(
    (p) => p.category === "Documentary" || p.category === "Music Video"
  );

  // Select the Post Production project by its unique id
  const firstPostProductionProject = projects.find(
    (p) => p.id === "post-production"
  );

  const firstAdProject = adProjects.length > 0 ? adProjects[0] : null;
  const firstVideoProductionProject =
    videoProductionProjects.length > 0 ? videoProductionProjects[0] : null;
  const firstShortFilmProject =
    shortFilmProjects.length > 0 ? shortFilmProjects[0] : null;

  const postProductionImage =
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";

  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Our Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover a highlight from each of our key service areas: ADs, Video
          Production, Short Films, and Post Production.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {firstAdProject && <ProjectCard project={firstAdProject} />}
        {firstVideoProductionProject && (
          <ProjectCard project={firstVideoProductionProject} />
        )}
        {firstShortFilmProject && (
          <ProjectCard project={firstShortFilmProject} />
        )}
        {firstPostProductionProject && (
          <ProjectCard
            project={{
              ...firstPostProductionProject,
              title: "Post Production",
              thumbnailUrl: postProductionImage,
            }}
          />
        )}
      </div>
    </div>
  );
}
