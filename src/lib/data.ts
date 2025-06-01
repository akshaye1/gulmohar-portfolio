import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    description: 'A stunning visual journey into the heart of abstract storytelling.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'abstract cinematic',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example YouTube embed URL
    category: 'Short Film',
    date: '2023',
    client: 'Independent',
    services: ['Filming', 'Editing', 'Color Grading'],
    longDescription: 'Project Alpha was an exploration of visual metaphors and narrative ambiguity. Shot over several weeks in diverse locations, the film pushes boundaries of conventional filmmaking. The editing process focused on creating a rhythmic and immersive experience, complemented by a meticulous color grading pass to enhance the mood and atmosphere.'
  },
  {
    id: 'brand-x-commercial',
    title: 'Brand X Commercial',
    description: 'Captivating commercial spot for the launch of Brand X new product line.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'product commercial',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_HERE_2',
    category: 'Commercial',
    date: '2024',
    client: 'Brand X Corp.',
    services: ['Concept Development', 'Shooting', 'Post-Production'],
    longDescription: 'This commercial for Brand X aimed to create a high-energy, visually engaging piece to introduce their latest product. We handled the project from concept to final delivery, ensuring the brand message was clearly communicated while maintaining a high aesthetic standard.'
  },
  {
    id: 'mountain-echoes',
    title: 'Mountain Echoes',
    description: 'A documentary capturing the serene beauty of mountain landscapes.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mountain landscape',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_HERE_3',
    category: 'Documentary',
    date: '2023',
    client: 'Nature First Films',
    services: ['Location Scouting', 'Drone Cinematography', 'Editing'],
    longDescription: 'Mountain Echoes is a tribute to the grandeur of nature. Utilizing advanced drone cinematography and time-lapse techniques, this documentary offers breathtaking views and a contemplative look at the wilderness. The editing weaves together stunning visuals with a subtle soundscape to create an immersive experience.'
  },
  {
    id: 'city-lights-symphony',
    title: 'City Lights Symphony',
    description: 'An artistic music video exploring urban nightlife and energy.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'city nightlife',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_HERE_4',
    category: 'Music Video',
    date: '2024',
    client: 'The Night Owls (Band)',
    services: ['Storyboarding', 'Filming', 'Visual Effects'],
    longDescription: 'This music video for The Night Owls translates their track into a visual symphony of city lights and nocturnal activities. We employed creative lighting techniques and dynamic camera movements to capture the vibrant energy of the urban landscape after dark.'
  },
];
