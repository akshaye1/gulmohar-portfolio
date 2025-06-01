
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Lightbulb, Users, Target, Film, Palette, Scissors, Sparkles, Volume2, Layers } from 'lucide-react';

export const metadata = {
  title: 'About Us - Gulmohar Production',
  description: "Learn about Gulmohar Production, our creative philosophy, experience, and skills in video editing and motion graphics.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          About Gulmohar Production
        </h1>
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-semibold">
          Transforming Concepts into Reality
        </p>
        <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
          Passionate about visual storytelling, creating exceptional video content. Creativity meets technical expertise for captivating videos tailored to your needs.
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
              <Lightbulb className="h-6 w-6 mr-3 text-primary" />
              Our Creative Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/80">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Users className="h-5 w-5 mr-2 text-accent" />
                Who We Are
              </h3>
              <p>
                At Gulmohar Production, we are passionate about visual storytelling and creating exceptional video content. Our team combines creativity with technical expertise to deliver captivating videos tailored to meet your needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Target className="h-5 w-5 mr-2 text-accent" />
                Our Mission
              </h3>
              <p>
                We strive to exceed expectations by offering end-to-end video production services that cover everything from concept development to the final product. With a focus on quality and innovation, we aim to inspire and engage audiences through our video projects.
              </p>
            </div>
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
