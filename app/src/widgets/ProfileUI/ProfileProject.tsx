import Project1 from "@/public/project1.png";
import Project2 from "@/public/project2.png";
import Project3 from "@/public/project3.png";
import Image from "next/image";
import avatar1 from "@/public/avatar1.png";
import avatar2 from "@/public/avatar2.png";
import avatar3 from "@/public/avatar3.png";
import avatar4 from "@/public/avatar4.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

const projects = [
  {
    image: Project1,
    projectId: "#1",
    projectName: "Modern",
    projectBio:
      "As Uber works through a huge amount of internalmanagement turmoil.",
    members: [avatar1, avatar2, avatar3, avatar4],
  },
  {
    image: Project2,
    projectId: "#2",
    projectName: "Scandinavian",
    projectBio:
      "Music is something that every person has his or her own specific opinion about.",
    members: [avatar1, avatar2, avatar3, avatar4],
  },
  {
    image: Project3,
    projectId: "#3",
    projectName: "Minimalist",
    projectBio:
      "Different people have different taste, and various types of music.",
    members: [avatar1, avatar2, avatar3, avatar4],
  },
];

export default function ProfileProject() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Projects</h2>
      <p className="text-gray-400 font-medium">Architects design houses</p>
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project) => (
          <div key={project.projectId}>
            <Image
              src={project.image}
              alt={project.projectName}
              className="mb-4"
            />
            <p className="text-sm text-gray-400">{project.projectId}</p>
            <h5 className="text-xl font-semibold text-gray-700 mb-4">
              {project.projectName}
            </h5>
            <p className="text-gray-400 text-sm mb-4">{project.projectBio}</p>
            <div className="flex justify-between items-center">
              <button className="text-teal-300 border border-teal-300 py-2 px-6 uppercase text-sm font-medium rounded-2xl">
                View all
              </button>
              <div className="flex -space-x-3">
                {project.members.map((member, index) => (
                  <Avatar key={index} className="h-8 w-8 border-2 border-white">
                    <AvatarImage src={member.src} />
                    <AvatarFallback>UU</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center rounded-2xl flex-col border-2 justify-center border-gray-400">
          <Plus className="text-gray-400" />
          <p className="text-xl font-semibold text-gray-400">
            Create a New Project
          </p>
        </div>
      </div>
    </div>
  );
}
