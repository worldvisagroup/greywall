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
                href="/#project"
                className="text-[#FFEDE6] hover:text-[#CCBDB6] transition-colors"
              >
                <ArrowBack className="h-8 w-8" />
              </Link>
              <h1 className="text-2xl lg:text-4xl font-playfair text-center flex-grow mt-[15%] mr-5 sm:mt-0">
                <span className="relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFEDE6]"></span>
                  {heading.slice(0, 3)}
                </span>
                <span className="inline-block mt-2 sm:mt-0">
                  {heading.slice(3)}
                </span>
              </h1>
            </div>
            <div className="space-y-16">
              {projects.length > 0 ? (
                projects.map(
                  ({
                    title,
                    imageOne,
                    imageTwo,
                    imageThree,
                    imageFour,
                    imageFive,
                    location,
                  }: any) => (
                    <div key={title}>
                      <ProjectSlider
                        title={title}
                        imageOne={imageOne}
                        imageTwo={imageTwo}
                        imageThree={imageThree}
                        imageFour={imageFour}
                        imageFive={imageFive}
                        location={location}
                      />
                    </div>
                  )
                )
              ) : (
                <p>No Projects Found</p>
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
    "location",
  ]);

  // projects[0].category.label
  const filteredProjects = projects.filter(
    (project: any) =>
      project.category[0].label.replace(/_/g, "-") === projectSlug
  );

  return filteredProjects;
}
