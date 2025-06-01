
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/lib/data';
import { ArrowRight, PlayCircle, Film } from 'lucide-react';

export const metadata = {
  title: 'Oomkar Anil Panchal - Video Editor & Motion Graphics Designer',
  description: 'Creative portfolio of Oomkar Anil Panchal, showcasing expertise in video editing, motion graphics, and visual storytelling.',
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[calc(90vh-var(--header-height))] flex items-center justify-center text-center rounded-lg overflow-hidden">
        <Image
          src="https://picsum.photos/1200/800"
          alt="Abstract creative background"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute inset-0 -z-10 filter brightness-[.4] animate-slowZoom"
          priority
        />
        <div className="relative z-10 p-8 space-y-8 max-w-4xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl font-bold font-headline text-white leading-tight animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            Oomkar Anil Panchal
          </h1>
          <p 
            className="text-xl md:text-2xl text-slate-200/90 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            Video Editor & Motion Graphics Designer | Crafting Visual Stories That Resonate
          </p>
          <div 
            className="space-x-4 animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            <Button size="lg" asChild className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300">
              <Link href="/work">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 hover:text-white shadow-md hover:shadow-white/30 transform hover:scale-105 transition-all duration-300">
              <Link href="/contact">
                Get In Touch <PlayCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-center mb-16">
          Latest Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
             <div key={project.id} className="animate-fadeInUp" style={{ animationDelay: `${1 + index * 0.2}s`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" asChild variant="outline" className="hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-300">
            <Link href="/work">
              Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-secondary/50 dark:bg-secondary/20 rounded-lg text-center animate-fadeInUp" style={{ animationDelay: '1.6s' }}>
        <div className="container mx-auto px-4">
          <Film className="h-16 w-16 text-primary mx-auto mb-6"/>
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s collaborate to create something truly exceptional. Reach out to discuss your ideas and how I can help.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300">
            <Link href="/contact">
              Contact Me Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
