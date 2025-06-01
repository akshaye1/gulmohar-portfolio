import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-alpha',
    title: 'Short Films', // Updated title
    description: 'A stunning visual journey into the heart of abstract storytelling.',
    thumbnailUrl: 'https://picsum.photos/600/400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example YouTube embed URL
    category: 'Short Film',
    date: '2023',
    client: 'Independent',
    services: ['Filming', 'Editing', 'Color Grading'],
    longDescription: 'Project Alpha was an exploration of visual metaphors and narrative ambiguity. Shot over several weeks in diverse locations, the film pushes boundaries of conventional filmmaking. The editing process focused on creating a rhythmic and immersive experience, complemented by a meticulous color grading pass to enhance the mood and atmosphere.',
    dataAiHint: 'abstract film' // Added dataAiHint
  },
  {
    id: 'brand-x-commercial',
    title: 'AD', // Updated title
    description: 'Captivating commercial spot for the launch of Brand X new product line.',
    thumbnailUrl: 'https://picsum.photos/600/400',
    videoUrl: 'https://www.youtube.com/embed/ogfYd705cRs', // Big Buck Bunny
    category: 'Commercial',
    date: '2024',
    client: 'Brand X Corp.',
    services: ['Concept Development', 'Shooting', 'Post-Production'],
    longDescription: 'This commercial for Brand X aimed to create a high-energy, visually engaging piece to introduce their latest product. We handled the project from concept to final delivery, ensuring the brand message was clearly communicated while maintaining a high aesthetic standard.',
    dataAiHint: 'product commercial' // Added dataAiHint
  },
  {
    id: 'mountain-echoes',
    title: 'Video Production', // Updated title
    description: 'A documentary capturing the serene beauty of mountain landscapes.',
    thumbnailUrl: 'https://picsum.photos/600/400',
    videoUrl: 'https://www.youtube.com/embed/QH2-TGUlwu4', // Elephants Dream
    category: 'Documentary',
    date: '2023',
    client: 'Nature First Films',
    services: ['Location Scouting', 'Drone Cinematography', 'Editing'],
    longDescription: 'Mountain Echoes is a tribute to the grandeur of nature. Utilizing advanced drone cinematography and time-lapse techniques, this documentary offers breathtaking views and a contemplative look at the wilderness. The editing weaves together stunning visuals with a subtle soundscape to create an immersive experience.',
    dataAiHint: 'mountain documentary' // Added dataAiHint
  },
  {
    id: 'city-lights-symphony',
    title: 'City Lights Symphony', // Original title, as it might be picked for Video Production if mountain-echoes is removed/changed
    description: 'An artistic music video exploring urban nightlife and energy.',
    thumbnailUrl: 'https://picsum.photos/600/400',
    videoUrl: 'https://www.youtube.com/embed/y_663_rSgOg', // Sintel
    category: 'Music Video',
    date: '2024',
    client: 'The Night Owls (Band)',
    services: ['Storyboarding', 'Filming', 'Visual Effects'],
    longDescription: 'This music video for The Night Owls translates their track into a visual symphony of city lights and nocturnal activities. We employed creative lighting techniques and dynamic camera movements to capture the vibrant energy of the urban landscape after dark.',
    dataAiHint: 'city music' // Added dataAiHint
  },
  {
    id: 'post-production-excellence',
    title: 'Post Production',
    description: 'Mastery in editing, VFX, color grading, and motion graphics.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    videoUrl: 'https://www.youtube.com/embed/w3_0x6oaWnQ', // Example video
    category: 'Post-Production Showcase',
    date: '2024',
    client: 'Gulmohar Production Reel',
    services: ['Editing', 'VFX', 'Color Grading', 'Motion Graphics', 'Sound Design'],
    longDescription: 'This project highlights Gulmohar Production\'s expertise in various post-production services, transforming raw footage into polished, impactful visual stories. It demonstrates proficiency in complex editing sequences, seamless visual effects integration, nuanced color grading, dynamic motion graphics, and immersive sound design.',
    dataAiHint: 'editing suite'
  }
];
