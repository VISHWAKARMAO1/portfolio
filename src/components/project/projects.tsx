
import Content from "./content";

const Projects = () => {

const projects = [
  {
    title: "Task Manager App",
    description: "A productivity tool for organizing daily tasks with reminders and priorities.",
    link: "https://example.com/task-manager",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "E-commerce Platform",
    description: "Online store with payment integration, inventory management, and user reviews.",
    link: "https://example.com/ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app displaying forecasts, maps, and alerts globally.",
    link: "https://example.com/weather-dashboard",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Social Media Clone",
    description: "Platform for sharing posts, following users, and engaging in discussions.",
    link: "https://example.com/social-clone",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Recipe Finder",
    description: "Search engine for recipes with ingredients, instructions, and nutritional info.",
    link: "https://example.com/recipe-finder",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Fitness Tracker",
    description: "App to monitor workouts, track progress, and set fitness goals.",
    link: "https://example.com/fitness-tracker",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Blog CMS",
    description: "Content management system for creating, editing, and publishing blog posts.",
    link: "https://example.com/blog-cms",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Portfolio Website",
    description: "Personal website showcasing projects, skills, and professional experience.",
    link: "https://example.com/portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with group chats and file sharing features.",
    link: "https://example.com/chat-app",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Data Visualization Tool",
    description: "Interactive charts and graphs for analyzing datasets and insights.",
    link: "https://example.com/data-viz",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=1074&q=80"
  }
];

  return (
    <div className="w-full p-8">
      <h1 className="text-4xl font-bold text-white mb-6 text-center animate-fade-in-down">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <Content key={index} title={project.title} description={project.description} link={project.link} image={project.image} />
        ))}
      </div>
    </div>
  )
}

export default Projects
