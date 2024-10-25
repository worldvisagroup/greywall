import Image from "next/image";
import { getDocuments } from "outstatic/server";

export default async function Index({ params }: any) {
  const projects = await getProjects(params.project);

  if (projects) {
    return (
      <>
        {projects.map(
          ({
            title,
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
            imageFive,
          }: any) => (
            <div key={title}>
              <h1 className="text-xl font-bold leading-10">{title}</h1>
              <div className="flex items-center gap-[12px]">
                {[imageOne, imageTwo, imageThree, imageFour, imageFive]
                  .filter(Boolean)
                  .map((image, index) => (
                    <Image
                      key={index}
                      width={200}
                      height={200}
                      alt={`${title} - Image ${index + 1}`}
                      src={image}
                      className="h-[200px] w-[200px]"
                    />
                  ))}
              </div>
            </div>
          )
        )}
      </>
    );
  }
}

export async function getProjects(projectSlug: string) {
  const projects = getDocuments("projects", [
    "title",
    "imageOne",
    "imageTwo",
    "imageThree",
    "imageFour",
    "imageFive",
    "category",
  ]);

  // projects[0].category.label
  const filteredProjects = projects.filter(
    (project) => project.category[0].label.replace(/_/g, "-") === projectSlug
  );

  return filteredProjects;
}
