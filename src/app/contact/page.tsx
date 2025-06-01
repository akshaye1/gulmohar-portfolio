
import ContactForm from '@/components/sections/ContactForm';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Me - Oomkar Anil Panchal',
  description: 'Get in touch with Oomkar Anil Panchal to discuss your video project or inquiry.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-headline">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <Link href="mailto:panchalofficialwork@gmail.com" className="text-sm text-muted-foreground hover:text-primary break-all">
                    panchalofficialwork@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <Link href="tel:+918655013233" className="text-sm text-muted-foreground hover:text-primary">
                    +91 86550 13233
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-headline">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="h-7 w-7" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
