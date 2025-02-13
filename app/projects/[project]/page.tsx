export const dynamic = "force-static";

import Contact from "@/app/components/Contact";
import ProjectSlider from "@/app/components/ProjectSlider";
import { ArrowBack } from "@mui/icons-material";
import { promises as fs } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { getDocumentSlugs, load } from "outstatic/server";
import path from "path";

interface Props {
  title : string
  imageOne : string
  imageTwo : string
  imageThree : string
  imageFour : string
  imageFive : string
  imageSix : string
  location : string
  inProgress : boolean
  videoOne : string
  videoTwo : string
  videoThree : string
  videoFour : string
}

export default async function Index({
  params,
}: {
  params: { project: string };
}) {
  const projectSlugs = getDocumentSlugs("projects");

  const allProjects = [];

  for (let i = 0; i < projectSlugs.length; i++) {
    const filePath = path.join(
      process.cwd(),
      "outstatic",
      "content",
      "projects",
      `${projectSlugs[i]}.md`
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data } = matter(fileContents);
    allProjects.push(data);
  }

  const projects = allProjects.filter((project: any) =>
    project.category.some(
      (cat: any) => cat.label.replace(/_/g, "-") === params.project
    )
  );

  if (projects) {
    let heading = params.project
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    heading = heading.includes("Interior") ? heading + "s" : heading;

    return (
      <>
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
                <h1 className="text-lg lg:text-5xl font-tenPearl text-center flex-grow">
                  <span className="relative inline-block">
                    <span className="absolute -bottom-[15px] left-0 w-full h-[2px] bg-[#FFEDE6]"></span>
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
                      imageSix,
                      location,
                      inProgress,
                      videoOne,
                      videoTwo,
                      videoThree,
                      videoFour,
                    }: Props) => (
                      <div key={title}>
                        <ProjectSlider
                          title={title}
                          imageOne={imageOne}
                          imageTwo={imageTwo}
                          imageThree={imageThree}
                          imageFour={imageFour}
                          imageFive={imageFive}
                          imageSix={imageSix}
                          location={location}
                          inProgress={inProgress}
                          videoOne={videoOne}
                          videoTwo={videoTwo}
                          videoThree={videoThree}
                          videoFour={videoFour}
                        />
                      </div>
                    )
                  )
                ) : (
                  <p>Coming Soon</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </>
    );
  }
}

export async function getProjects(projectSlug: string) {
  const db = await load();

  const projects = await db
    .find({ collection: "projects" }, [
      "title",
      "imageOne",
      "imageTwo",
      "imageThree",
      "imageFour",
      "imageFive",
      "category",
      "location",
    ])
    .toArray();

  // projects[0].category.label
  const filteredProjects = projects.filter((project: any) =>
    project.category.some(
      (cat: any) => cat.label.replace(/_/g, "-") === projectSlug
    )
  );

  return filteredProjects;
}

export async function generateStaticParams() {
  const projects = getDocumentSlugs("projects");

  return projects.map((slug) => ({ slug }));
}
