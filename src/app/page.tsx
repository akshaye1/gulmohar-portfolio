import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/lib/data';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[calc(80vh-var(--header-height))] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-xl">
        <Image
          src="https://picsum.photos/200/300"
          alt="Abstract cinematic background"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 -z-10 filter brightness-50"
          data-ai-hint="abstract cinematic dark"
          priority
        />
        <div className="relative z-10 p-8 space-y-6 max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-md">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-white leading-tight">
            Crafting Visual Stories That Resonate
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Specializing in filming, shooting, and video editing to bring your vision to life with creativity and precision.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/work">
                View Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/contact">
                Get In Touch <PlayCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Latest Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild variant="outline">
            <Link href="/work">
              Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-secondary rounded-lg text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something truly exceptional. Reach out to discuss your ideas and how we can help.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
