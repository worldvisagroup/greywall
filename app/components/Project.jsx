import Image from "next/image";
import Link from "next/link";
import { getDocuments } from "outstatic/server";

const Project = async () => {
  const data = await getAllProjects();

  return (
    <div id="project" className="bg-[#313131] text-white min-h-screen p-4 lg:p-8">
      <div className="container mx-auto">
        <h1 className="font-serif text-4xl lg:text-6xl mb-8 text-center">
          Our Work
        </h1>
        <div className="flex flex-wrap justify-center mt-[8%] gap-12">
          {data?.map((collection, index) => (
            <Link href={`/projects/${collection.slug}`} key={index} className="w-full max-w-[290px]">
              <div className="card group relative h-[370px] bg-gradient-to-b from-[#ffede6] to-[#faf4f2] rounded-[10px] p-5 overflow-hidden cursor-pointer">
                <div className="card-title text-[#262626] text-2xl font-bold mb-5 mt-28 font-montserrat group-hover:text-white transition-all duration-500 relative z-10">
                  {collection.title}
                </div>
                <div className="small-desc font-semibold text-sm text-[#452c2c] group-hover:text-white/80 transition-all duration-500 relative z-10 font-montserrat">
                  Click to view projects
                </div>
                <Image className="w-full h-full absolute inset-0 bg-cover bg-center z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-500" src={collection.coverImage} alt={collection.title} width={400} height={400} />
                <div className="go-corner absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#7C7C7C] to-[#272626] rounded-bl-[60px] flex items-center justify-center">
                  <div className="go-arrow text-white font-courier text-2xl -mt-2 -mr-2">
                    &rarr;
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#7C7C7C] to-[#585757] rounded-full transform scale-100 origin-center transition-transform duration-350 ease-out group-hover:scale-[25]"></div>
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