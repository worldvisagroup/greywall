export const dynamic = "force-static";

import Image from "next/image";
import Link from "next/link";
import { getDocuments } from "outstatic/server";

const Project = async () => {
  const data = await getAllProjects();
  return (
    <div
      id="project"
      className="bg-[#313131] text-[#FFEDE6] min-h-screen p-4 lg:p-8"
    >
      <div className="container mx-auto">
        <h1 className="font-northwell text-5xl lg:text-[76px] lg:top-[58px] my-8 lg:my-10 text-center relative">
          <span className="relative">
            <span className="absolute bottom-0 w-[calc(100%+1px)] h-[2px] bg-white"></span>
            Pro
          </span>
          jects
        </h1>
        <div className="flex flex-wrap justify-center mt-[8%] gap-12">
          {data?.map((collection, index) => (
            <Link
              href={`/projects/${collection.slug}`}
              key={index}
              className="w-full sm:w-[540px] h-[260px]"
            >
              <div className="card group relative w-full h-full rounded-[5px] overflow-hidden cursor-pointer shadow-lg">
                {/* Desktop version  */}
                <div className="absolute inset-0 z-0 bg-black opacity-100 group-hover:opacity-100 transition-opacity duration-500 sm:block hidden">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <Image
                    src={collection.coverImage}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                {/* Mobile version */}
                <div className="absolute inset-0 z-0 sm:hidden">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute inset-0 bg-[#000000] opacity-30"></div>
                  <Image
                    src={collection.coverImage}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      opacity: 1,
                    }}
                  />
                </div>
                {/* Desktop content */}
                <div className="relative overflow-hidden h-full w-full sm:block hidden">
                  <div className="absolute inset-0 flex flex-col justify-center items-center transition-all duration-1000 transform group-hover:justify-start group-hover:items-start group-hover:p-8">
                    <h2 className="card-title text-[#ffff] font-playfair text-3xl mb-5 transition-all duration-500 relative z-15 w-full text-center group-hover:text-left group-hover:mb-1 transform group-hover:translate-x-0 group-hover:translate-y-0">
                      {collection.title}
                    </h2>
                  </div>
                </div>
                {/* Mobile content */}
                <div className="sm:hidden relative pt-[10%] px-[5%] h-full w-full p-4 flex flex-col justify-between z-10">
                  <h2 className="card-title text-[#ffff] text-2xl font-playfair">
                    {collection.title}
                  </h2>
                  <div className="self-end">
                    <span className="text-white font-medium text-lg font-playfair">
                      View Portfolio <span className="ml-2">&rarr;</span>
                    </span>
                  </div>
                </div>
                {/* Desktop hover content */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 text-white transition-all duration-700 sm:block hidden">
                  <span className="text-white font-semibold font-playfair text-xl">
                    View Portfolio <span className="ml-2">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

export async function getAllProjects() {
  const allServices = getDocuments("homepage-all-projects", [
    "title",
    "slug",
    "coverImage",
  ]);
  return allServices;
}
