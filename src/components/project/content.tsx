import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";

interface ContentProps {
  title: string;
  description: string;
  link: string;
  image?: string;
}

const Content: React.FC<ContentProps> = ({ title, description, link, image }) => {
  return (
    <div className="h-100 w-65 rounded-xl m-4 gap-2">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm relative">
          <img 
            className="w-full h-100 object-cover" 
            src={image || "https://images.unsplash.com/photo-1659034637653-7717e711dd47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"} 
            alt="Card image"/>
            <div className="absolute bottom-0 left-0 right-0 text-white p-4 flex justify-center items-center">
              <div className="text-center">
                <h1 className="font-bold">{title}</h1>
                <p className="text-left line-clamp-2">{description}</p>
                <a href={link} className="inline-flex items-center mt-2 px-3 py-1 bg-blue-400 text-white rounded text-sm transition-all duration-300 hover:scale-105 hover:bg-blue-500">
                  <CircleArrowOutUpRight className="mr-1" /> Read More
                </a>
              </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default Content