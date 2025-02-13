import { getDocuments } from "outstatic/server";

export default async function Index() {
  const projects = await getData();
  return projects.map(
    ({ title, content }: { title: string; content: string }) => (
      <>
        <h1 className="text-xl font-bold leading-10" key={title}>
          {title}
        </h1>
        <p>{content}</p>
      </>
    )
  );
}

async function getData() {
  const posts = getDocuments("reviews", ["title", "content", "rating"]);

  return posts;
}
