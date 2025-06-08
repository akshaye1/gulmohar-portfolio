import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "short-films",
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
    showcaseVideos: [
      {
        name: "Sataha tak",
        videoUrl: "https://youtu.be/dPPVLgL0Hlw?si=T4-_KtXIbN0jZzr-",
        thumbnail: "https://img.youtube.com/vi/dPPVLgL0Hlw/maxresdefault.jpg",
      },
      {
        name: "Discipline",
        videoUrl: "https://youtu.be/6IEdAoZQsnQ?si=N6MTCK_SHPCndprh",
        thumbnail: "https://img.youtube.com/vi/6IEdAoZQsnQ/maxresdefault.jpg",
      },
      {
        name: "Gachpan",
        videoUrl: "https://youtu.be/jF98s66Ow_c?si=yCeS6pH7lqjkqJ9v",
        thumbnail: "https://img.youtube.com/vi/jF98s66Ow_c/maxresdefault.jpg",
      },
      {
        name: "Aamcha tharlay",
        videoUrl: "https://youtu.be/1TO2pHp6LUI?si=dq9ud2UQ-GHl-6GW",
        thumbnail: "https://img.youtube.com/vi/1TO2pHp6LUI/maxresdefault.jpg",
      },
    ],
  },
  {
    id: "advertisement",
    title: "Advertisement", // Updated title
    description: "Captivating commercial spot for the BUFP Fashion ad",
    thumbnailUrl: "/glass-bottle.jpg",
    videoUrl: "https://www.youtube.com/embed/d2-vXYpHuy0", // Updated to YouTube link
    category: "Commercial",
    date: "2024",
    client: "BUFP Fashion Ad",
    services: ["Concept Development", "Shooting", "Post-Production"],
    longDescription:
      "Welcome to Gulmohar Production! Our recent project involves creating a budget-friendly and captivating ad for the new startup BUFP. As a video production company dedicated to crafting visual stories, we are thrilled to offer our enthusiastic services to help bring your brand to life.\n\nThis commercial for Brand X aimed to create a high-energy, visually engaging piece to introduce their latest product. We handled the project from concept to final delivery, ensuring the brand message was clearly communicated while maintaining a high aesthetic standard.",
    dataAiHint: "product commercial", // Added dataAiHint
    showcaseVideos: [
      {
        name: "BUFP Ad",
        videoUrl: "https://youtu.be/d2-vXYpHuy0?si=ihU-renUTYh-52DI",
        thumbnail: "https://img.youtube.com/vi/d2-vXYpHuy0/maxresdefault.jpg",
      },
      {
        name: "Pepper mint-nion",
        videoUrl: "https://youtu.be/xYqcWVZ_EaI?si=_QsaDRIZ3SRsrCbl",
        thumbnail: "https://img.youtube.com/vi/xYqcWVZ_EaI/maxresdefault.jpg",
      },
      {
        name: "Duken's Roastery",
        videoUrl: "https://youtu.be/JHYa0lHRrFg?si=kMClOFVRcER_YtIm",
        thumbnail: "https://img.youtube.com/vi/JHYa0lHRrFg/maxresdefault.jpg",
      },
      {
        name: "Apple cinnamon",
        videoUrl: "https://youtu.be/YdAgRSMvEfc?si=93cda_gLDFLFJZ0R",
        thumbnail: "https://img.youtube.com/vi/YdAgRSMvEfc/maxresdefault.jpg",
      },
      {
        name: "Piatto desert studio",
        videoUrl: "https://youtu.be/XZgZDhkL0IY?si=SDGbS0mWhtUl_IqC",
        thumbnail: "https://img.youtube.com/vi/XZgZDhkL0IY/maxresdefault.jpg",
      },
      {
        name: "Infuser",
        videoUrl: "https://youtu.be/SYnnJQh3YrA?si=0-MT1lmObKmZiQdK",
        thumbnail: "https://img.youtube.com/vi/SYnnJQh3YrA/maxresdefault.jpg",
      },
      {
        name: "AsahiKASEI",
        videoUrl:
          "https://www.instagram.com/reel/CxqJgLoPE1Z/?igsh=MXQ4dXhoM3RudTNmMQ==",
        thumbnail:
          "https://scontent.cdninstagram.com/v/t51.29350-15/385438282_1222222342079111_1234567890_n.jpg?fit=crop&w=600&h=400", // Replace with actual Instagram thumbnail if available
      },
    ],
  },
  {
    id: "video-production",
    title: "Video Production", // Updated title
    description:
      "Complete video production for brands, spaces, and stories that matter.",
    thumbnailUrl: "/video-production-behind-the-scenes.jpg",
    videoUrl: "https://www.youtube.com/embed/TUTPyfurDDM", // Example video URL
    category: "Documentary",
    date: "2024",
    client: "Nature Films",
    services: ["Filming", "Editing", "Sound Design"],
    longDescription:
      "At Gulmohar Production, we offer full-scale video production services tailored to a wide range of needs. From conceptualizing and scripting to filming and final editing, we handle every step of the process in-house. Whether you're looking to create impactful documentaries, polished corporate videos, detailed interior walkthroughs, or educational and informative content, our team ensures your story is captured with clarity, creativity, and precision. With the right balance of visual aesthetics and narrative strength, we turn your ideas into compelling video experiences.",
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
    showcaseVideos: [
      {
        name: "Xiaomi15Ultra Unboxing",
        videoUrl: "https://youtu.be/khsjCsVOpUs?si=W0s9EtHaK1n6Nylo",
        thumbnail: "https://img.youtube.com/vi/khsjCsVOpUs/maxresdefault.jpg",
      },
    ],
  },
];
