import Link from 'next/link';


const Project = () => {
  const projects = [
    { title: 'Construction', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxllQbjHl7FEd6AdyYjzL3BpdwnHm4wy4Tg&s" },
    { title: 'Civil ', image: "https://images.squarespace-cdn.com/content/v1/56f16317859fd038abca481a/1461097169552-87N4PKWL729EWYAV26BU/tumblr_mn8b8sLRb61rkz363o1_1280.jpg" },
    { title: 'Commercial Interior Design', image: "https://cdn.prod.website-files.com/65f5f834fb31bfc79e83b230/65fcc82f42342ec97c53ded1_latest_residential_design_trends.png" },
    { title: 'Residential Interior Design', image: "https://media.licdn.com/dms/image/D4D12AQFvjwGH7eRaig/article-cover_image-shrink_720_1280/0/1702011335822?e=2147483647&v=beta&t=-o8jWLRznBJm4HXkFBcjpon46oJg6GoiHxiGnEOpdpk" },
  ];

  return (
    <div className="bg-[#313131] text-white min-h-screen p-4 lg:p-8">
      <div className="container mx-auto">
        <h1 className="font-serif text-4xl lg:text-6xl mb-8 text-center">Our Work</h1>
        <div className="flex flex-wrap justify-center mt-[8%] gap-12">
          {projects.map((project, index) => (
            <Link href="/projects" key={index} className="w-full max-w-[290px]">
              <div className="card group relative h-[370px] bg-gradient-to-b from-[#c3e6ec] to-[#a7d1d9] rounded-[10px] p-5 overflow-hidden cursor-pointer">
                <div className="card-title text-[#262626] text-2xl font-bold mb-5 mt-28 font-montserrat group-hover:text-white transition-all duration-500 relative z-10">{project.title}</div>
                <div className="small-desc font-semibold text-sm text-[#452c2c] group-hover:text-white/80 transition-all duration-500 relative z-10 font-montserrat">Click to view projects</div>
                <div className="absolute inset-0 bg-cover bg-center z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-500" style={{backgroundImage: `url(${project.image})`}}></div>
                <div className="go-corner absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#6293c8] to-[#384c6c] rounded-bl-[60px] flex items-center justify-center">
                  <div className="go-arrow text-white font-courier text-2xl -mt-2 -mr-2">&rarr;</div>
                </div>
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#364a60] to-[#384c6c] rounded-full transform scale-100 origin-center transition-transform duration-350 ease-out group-hover:scale-[25]"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
