import ProjectSlider from "@/app/components/ProjectSlider";
import { ArrowBack } from "@mui/icons-material";
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
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-[#333333] bg-opacity-70 backdrop-blur-md rounded-lg"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mt-8 mb-24">
              <Link
                href="/"
                className="text-[#FFEDE6] hover:text-[#CCBDB6] transition-colors"
              >
                <ArrowBack className="h-8 w-8" />
              </Link>
              <h1 className="text-4xl font-playfair text-center flex-grow">
                <span className="relative">
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFEDE6]"></span>
                  {heading.slice(0, 3)}
                </span>
                {heading.slice(3)}
              </h1>
            </div>
            <div className="space-y-16">
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
                    <ProjectSlider
                      title={title}
                      imageOne={imageOne}
                      imageTwo={imageTwo}
                      imageThree={imageThree}
                      imageFour={imageFour}
                      imageFive={imageFive}
                    />
                  </div>
                )
              )}
            </div>
          </div>
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
