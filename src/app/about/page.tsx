
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Lightbulb, User, Film, Palette, Scissors, Sparkles, Volume2, Layers } from 'lucide-react';

export const metadata = {
  title: 'About Us - Gulmohar Production',
  description: "Learn about Gulmohar Production, our creative philosophy, experience, and skills in video editing and motion graphics.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          About Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A creative production house from Mumbai, India, specializing in visual storytelling.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://picsum.photos/600/400"
            alt="Gulmohar Production - Creative Team"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center">
              <User className="h-6 w-6 mr-3 text-primary" />
              Oomkar Anil Panchal (Founder)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80">
            <p>
              Hi, I&apos;m Oomkar Anil Panchal, founder of Gulmohar Production. I&apos;m a video editor and motion graphics designer from Mumbai, India. I love to create visual stories with editing and motion graphics, which give me a platform to express my creativity.
            </p>
            <p>
              At Gulmohar Production, we are always learning and exploring new creative aspects. We have an eye for detail and a passion for storytelling. Our experience ranges from short films, documentaries, commercials and music videos. Let&apos;s connect and create something amazing together.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-headline flex items-center">
            <Zap className="h-6 w-6 mr-3 text-primary" />
            What We Do
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-foreground/80">
            <li className="flex items-center space-x-3">
              <Scissors className="h-5 w-5 text-accent flex-shrink-0" />
              <span><strong>Video Editing</strong></span>
            </li>
            <li className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-accent flex-shrink-0" />
              <span><strong>Motion Graphics Design</strong></span>
            </li>
            <li className="flex items-center space-x-3">
              <Palette className="h-5 w-5 text-accent flex-shrink-0" />
              <span><strong>Color Correction / Grading</strong></span>
            </li>
            <li className="flex items-center space-x-3">
              <Film className="h-5 w-5 text-accent flex-shrink-0" />
              <span><strong>Visual Effects (VFX)</strong></span>
            </li>
            <li className="flex items-center space-x-3">
              <Volume2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span><strong>Sound Design</strong></span>
            </li>
            <li className="flex items-center space-x-3">
              <Layers className="h-5 w-5 text-accent flex-shrink-0" />
              <span><strong>2D/3D Animation</strong></span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
