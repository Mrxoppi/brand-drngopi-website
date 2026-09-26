import { getAllProjects } from "@/lib/mdx";
import ProjectsClient from "./ProjectsClient";

export default function Projects() {
  const projects = getAllProjects();
  return <ProjectsClient projects={projects} />;
}
