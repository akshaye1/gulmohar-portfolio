import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { ArrowRight, PlayCircle, Film } from "lucide-react";

export const metadata = {
  title: "Gulmohar Production - Creative Visuals & Storytelling",
  description:
    "Creative portfolio of Gulmohar Production, showcasing expertise in video editing, motion graphics, and visual storytelling.",
};

export default function HomePage() {
  // Select specific projects for the homepage
  const projectTitlesForHomepage = [
    "Short Films",
    "AD",
    "Video Production",
    "Post Production",
  ];
  const featuredProjects = projectTitlesForHomepage
    .map((title, idx) => {
      if (idx === 3) {
        const project = projects.find((p) => p.title === title);
        // Only override the title for display, keep all other properties (including thumbnailUrl)
        return project ? { ...project, title: "Post Production" } : undefined;
      }
      return projects.find((p) => p.title === title);
    })
    .filter((project): project is Project => project !== undefined);

  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[calc(80vh-var(--header-height))] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80"
          alt="Cinematic film production background"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute inset-0 -z-10 filter brightness-[.4] animate-slowZoom"
          priority
        />
        <div className="relative z-10 p-8 space-y-8 max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold font-headline text-white leading-tight animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Gulmohar Production
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200/90 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Gulmohar is your video production partner. We create stunning
            visuals that bring your ideas to life!
          </p>
          <div
            className="space-x-4 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/work">
                View Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-black dark:text-white hover:bg-white hover:text-black dark:hover:text-black shadow-md hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
                Get In Touch <PlayCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-center mb-16">
          Latest Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button
            size="lg"
            asChild
            variant="outline"
            className="hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/work">
              Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-20 bg-secondary/50 dark:bg-secondary/20 rounded-lg text-center animate-fadeInUp"
        style={{ animationDelay: "1.6s" }}
      >
        <div className="container mx-auto px-4">
          <Film className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s collaborate to create something truly exceptional. Reach
            out to discuss your ideas and how we can help.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
