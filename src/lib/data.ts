import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-alpha",
    title: "Short Films", // Updated title
    description:
      "A stunning visual journey into the heart of abstract storytelling.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-filmmaker-in-the-woods-32742-large.mp4", // Direct video URL for Short Films
    category: "Short Film",
    date: "2023",
    client: "Independent",
    services: ["Filming", "Editing", "Color Grading"],
    longDescription:
      "Project Alpha was an exploration of visual metaphors and narrative ambiguity. Shot over several weeks in diverse locations, the film pushes boundaries of conventional filmmaking. The editing process focused on creating a rhythmic and immersive experience, complemented by a meticulous color grading pass to enhance the mood and atmosphere.",
    dataAiHint: "abstract film", // Added dataAiHint
  },
  {
    id: "brand-x-commercial",
    title: "Advertisement", // Updated title
    description:
      "Captivating commercial spot for the BUFP Fashion ad",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    videoUrl: "https://www.youtube.com/embed/d2-vXYpHuy0", // Updated to YouTube link
    category: "Commercial",
    date: "2024",
    client: "BUFP Fashion Ad",
    services: ["Concept Development", "Shooting", "Post-Production"],
    longDescription:
      "Welcome to Gulmohar Production! Our recent project involves creating a budget-friendly and captivating ad for the new startup BUFP. As a video production company dedicated to crafting visual stories, we are thrilled to offer our enthusiastic services to help bring your brand to life.\n\nThis commercial for Brand X aimed to create a high-energy, visually engaging piece to introduce their latest product. We handled the project from concept to final delivery, ensuring the brand message was clearly communicated while maintaining a high aesthetic standard.",
    dataAiHint: "product commercial", // Added dataAiHint
  },
  {
    id: "mountain-echoes",
    title: "Video Production", // Updated title
    description:
      "A documentary capturing the serene beauty of mountain landscapes.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-recording-a-singer-in-a-studio-34486-large.mp4", // Direct video URL for Video Production
    category: "Documentary",
    date: "2023",
    client: "Nature First Films",
    services: ["Location Scouting", "Drone Cinematography", "Editing"],
    longDescription:
      "Mountain Echoes is a tribute to the grandeur of nature. Utilizing advanced drone cinematography and time-lapse techniques, this documentary offers breathtaking views and a contemplative look at the wilderness. The editing weaves together stunning visuals with a subtle soundscape to create an immersive experience.",
    dataAiHint: "mountain documentary", // Added dataAiHint
  },
  {
    id: "city-lights-symphony",
    title: "City Lights Symphony", // Original title, as it might be picked for Video Production if mountain-echoes is removed/changed
    description:
      "An artistic music video exploring urban nightlife and energy.",
    thumbnailUrl: "https://picsum.photos/600/400",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-urban-landscape-seen-from-a-moving-vehicle-34481-large.mp4", // Direct video URL
    category: "Music Video",
    date: "2024",
    client: "The Night Owls (Band)",
    services: ["Storyboarding", "Filming", "Visual Effects"],
    longDescription:
      "This music video for The Night Owls translates their track into a visual symphony of city lights and nocturnal activities. We employed creative lighting techniques and dynamic camera movements to capture the vibrant energy of the urban landscape after dark.",
    dataAiHint: "city music", // Added dataAiHint
  },
  {
    id: "post-production-excellence",
    title: "Post Production",
    description: "Mastery in editing, VFX, color grading, and motion graphics.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-computer-with-a-green-screen-9340-large.mp4", // Direct video URL for Post Production
    category: "Post-Production Showcase",
    date: "2024",
    client: "Gulmohar Production Reel",
    services: [
      "Editing",
      "VFX",
      "Color Grading",
      "Motion Graphics",
      "Sound Design",
    ],
    longDescription:
      "This project highlights Gulmohar Production's expertise in various post-production services, transforming raw footage into polished, impactful visual stories. It demonstrates proficiency in complex editing sequences, seamless visual effects integration, nuanced color grading, dynamic motion graphics, and immersive sound design.",
    dataAiHint: "editing suite",
  },
];
