export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string; // Optional: Add later if you want screenshots
  githubUrl?: string; // Optional: Link to the repo
  liveUrl?: string;   // Optional: Link to the deployed app
}