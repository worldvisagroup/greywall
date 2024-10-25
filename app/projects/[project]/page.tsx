import ProjectSlider from "@/components/ProjectSlider";
import { ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { getDocuments } from "outstatic/server";

export default async function Index({ params }: any) {
  const projects = await getProjects(params.project);

  if (projects) {
    const heading = params.project
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <div className="bg-[#333333] text-[#FFEDE6] min-h-screen p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair mb-8 text-center">
            <div className="flex items-center gap-4 mt-[12px]">
              <Link
                href="/"
                className="text-[#FFEDE6] hover:text-[#CCBDB6] transition-colors inline-block"
              >
                <ArrowBack className="h-8 w-8" />
              </Link>
            </div>
            <span className="relative">
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFEDE6]"></span>
              {heading.slice(0, 3)}
            </span>
            {heading.slice(3)}
          </h1>
          {projects.map(
            ({
              title,
              imageOne,
              imageTwo,
              imageThree,
              imageFour,
              imageFive,
            }: any) => (
              <ProjectSlider
                key={title}
                title={title}
                imageOne={imageOne}
                imageTwo={imageTwo}
                imageThree={imageThree}
                imageFour={imageFour}
                imageFive={imageFive}
              />
            )
          )}
        </div>
      </div>
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
    (project: any) =>
      project.category[0].label.replace(/_/g, "-") === projectSlug
  );

  return filteredProjects;
}
