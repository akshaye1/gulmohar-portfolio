
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Lightbulb, Users, Target } from 'lucide-react';

export const metadata = {
  title: 'About Us - Gulmohar Production',
  description: "Learn about Gulmohar Production, our creative philosophy, experience, and skills in video editing and motion graphics.",
};

const services = [
  {
    title: "Script Writing",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "typewriter script",
  },
  {
    title: "Making video content",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "camera clapperboard",
  },
  {
    title: "Post Production",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "editing computer",
  },
];

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
            src="https://placehold.co/600x400.png"
            alt="Gulmohar Production - Creative Team"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
            data-ai-hint="team meeting"
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
      
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline flex items-center justify-center md:justify-start">
            <Zap className="h-6 w-6 mr-3 text-primary" />
            What We Do
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group transform hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={service.imageHint}
                  />
                </div>
                <CardFooter className="p-4 text-center bg-card/80 backdrop-blur-sm flex-grow flex items-center justify-center">
                  <h3 className="text-lg font-semibold font-headline text-card-foreground">{service.title}</h3>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
