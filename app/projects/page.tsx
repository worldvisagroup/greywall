import { getDocuments } from "outstatic/server";

export default async function Index() {
  const projects = await getData();
  return projects.map((project) => (
    <>
      <h1 key={project.title}>{project.title}</h1>
      {project?.imageOne ? (
        <img src={project.imageOne} className="h-[200px] w-[200px]" />
      ) : (
        <></>
      )}
    </>
  ));
}

async function getData() {
  const posts = getDocuments("projects", ["title", "imageOne", "imageTwo"]);
  console.log("projects", posts);
  return posts;
}
