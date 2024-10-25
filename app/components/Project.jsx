import Image from "next/image";
import Link from "next/link";
import { getDocuments } from "outstatic/server";

const Project = async () => {
  const data = await getAllProjects();

  return (
    <div id="project" className="bg-[#313131] text-white min-h-screen p-4 lg:p-8">
      <div className="container mx-auto">
        <h1 className="font-playfair text-4xl lg:text-6xl mb-8 text-center relative">
          <span className="relative">
            <span className="absolute -left-4 bottom-0 w-[calc(100%+8px)] h-[4px] bg-white"></span>
            Pr
          </span>
          ojects
        </h1>
        <div className="flex flex-wrap justify-center mt-[8%] gap-12">
          {data?.map((collection, index) => (
            <Link href={`/projects/${collection.slug}`} key={index} className="w-[561px] h-[284px]">
              <div className="card group relative w-full h-full rounded-[5px] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                  <Image
                    src={collection.coverImage}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center group-hover:justify-start group-hover:items-start group-hover:p-8 transition-all duration-500">
                  <h2 className="card-title text-[#ffff] text-3xl font-bold mb-5 font-playfair group-hover:text-white transition-all duration-500 relative z-10">
                    {collection.title}
                  </h2>
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
  const allServices = getDocuments("homepage-all-projects", ["title", "slug", "coverImage"]);

  return allServices;
}
