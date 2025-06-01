import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Lightbulb, Users, Film } from 'lucide-react';

export const metadata = {
  title: 'About Us - Filmic Visions',
  description: 'Learn about Filmic Visions, our creative philosophy, experience, and video production services.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          About Filmic Visions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are passionate storytellers, dedicated to transforming ideas into compelling visual narratives through expert filming and editing.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Creative team working on a film project"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
            data-ai-hint="film crew editing"
          />
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center">
              <Lightbulb className="h-6 w-6 mr-3 text-primary" />
              Our Creative Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80">
            <p>
              At Filmic Visions, we believe that every frame tells a story. Our approach is rooted in a deep understanding of visual language, combined with technical mastery. We strive to create videos that not only look stunning but also evoke emotion and convey messages effectively.
            </p>
            <p>
              Collaboration is at the heart of our process. We work closely with our clients to understand their vision and goals, ensuring that the final product is a true reflection of their intent, elevated by our creative expertise.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-headline flex items-center">
            <Zap className="h-6 w-6 mr-3 text-primary" />
            Experience & Expertise
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground/80">
          <p>
            With years of experience in the industry, our team has honed its skills across a diverse range of projects, from cinematic short films and impactful commercials to engaging documentaries and dynamic music videos. We are proficient in the latest filming techniques, state-of-the-art camera equipment, and advanced post-production workflows.
          </p>
          <p>
            Our expertise spans concept development, storyboarding, location scouting, principal photography, aerial cinematography, intricate video editing, color grading, sound design, and final delivery. We are committed to continuous learning and adapting to the ever-evolving landscape of video production.
          </p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-headline flex items-center">
            <Film className="h-6 w-6 mr-3 text-primary" />
            Services We Offer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-3 text-foreground/80">
            <li><strong>Full Video Production:</strong> From concept to final cut, we manage all aspects of video creation.</li>
            <li><strong>Cinematography & Filming:</strong> High-quality shooting services using professional equipment.</li>
            <li><strong>Video Editing:</strong> Creative and technical editing to shape your footage into a polished narrative.</li>
            <li><strong>Color Grading:</strong> Enhancing the visual mood and consistency of your video.</li>
            <li><strong>Drone Videography:</strong> Capturing breathtaking aerial shots for a unique perspective.</li>
            <li><strong>Commercials & Branded Content:</strong> Crafting compelling videos that elevate your brand.</li>
            <li><strong>Documentaries & Short Films:</strong> Telling impactful stories with cinematic quality.</li>
            <li><strong>Music Videos:</strong> Bringing musical artistry to life through captivating visuals.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
