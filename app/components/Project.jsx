import Image from "next/image";
import Link from "next/link";
import { getDocuments } from "outstatic/server";

const Project = async () => {
  const data = await getAllProjects();

  return (
    <div
      id="project"
      className="bg-[#313131] text-white min-h-screen p-4 lg:p-8"
    >
      <div className="container mx-auto">
        <h1 className="font-serif text-[50px] lg:text-[60px] lg:top-[58px] mb-8 text-center relative">
          <span className="relative">
            <span className="absolute -left-4 bottom-0 w-[calc(100%+8px)] h-[4px] bg-white"></span>
            Pr
          </span>
          ojects
        </h1>
        <div className="flex flex-wrap justify-center mt-[8%] gap-12">
          {data?.map((collection, index) => (
            <Link
              href={`/projects/${collection.slug}`}
              key={index}
              className="w-[540px] h-[260px]"
            >
              <div className="card group relative w-full h-full rounded-[5px] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 z-0 opacity-35 group-hover:opacity-20 transition-opacity duration-500">
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
                <div className="relative overflow-hidden h-full w-full">
                  <div className="absolute inset-0 flex flex-col justify-center items-center transition-all duration-500 transform group-hover:justify-start group-hover:items-start group-hover:p-8">
                    <h2 className="card-title text-[#ffff] text-3xl  mb-5 font-playfair transition-all duration-500 relative z-15 w-full text-center group-hover:text-left group-hover:mb-1 transform group-hover:translate-x-0 group-hover:translate-y-0">
                      {collection.title}
                    </h2>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 text-white transition-all duration-500">
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
