import { getDocuments } from "outstatic/server";

export default async function Index() {
  const projects = await getData();
  return projects.map((project) => (
    <h1 key={project.title}>{project.title}</h1>
  ));
}

async function getData() {
  const posts = getDocuments("projects");
  console.log("projects", posts);
  return posts;
}
