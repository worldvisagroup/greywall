import Image from "next/image";
import { getDocuments } from "outstatic/server";

export default async function Index() {
  const projects = await getData();
  return projects.map(
    ({
      title,
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      category,
    }: any) => (
      <>
        <h1 className="text-xl font-bold leading-10" key={title}>
          {title}
        </h1>
        {category ? <p>{category[0].value}</p> : <></>}
        <div className="flex items-center gap-[12px]">
          {imageOne ? (
            <Image
              width={200}
              height={200}
              alt={title}
              src={imageOne}
              className="h-[200px] w-[200px]"
            />
          ) : (
            <></>
          )}
          {imageTwo ? (
            <Image
              width={200}
              height={200}
              alt={title}
              src={imageTwo}
              className="h-[200px] w-[200px]"
            />
          ) : (
            <></>
          )}
          {imageThree ? (
            <Image
              width={200}
              height={200}
              alt={title}
              src={imageThree}
              className="h-[200px] w-[200px]"
            />
          ) : (
            <></>
          )}
          {imageFour ? (
            <Image
              width={200}
              height={200}
              alt={title}
              src={imageFour}
              className="h-[200px] w-[200px]"
            />
          ) : (
            <></>
          )}
          {imageFive ? (
            <Image
              width={200}
              height={200}
              alt={title}
              src={imageFive}
              className="h-[200px] w-[200px]"
            />
          ) : (
            <></>
          )}
        </div>
      </>
    )
  );
}

async function getData() {
  const posts = getDocuments("projects", [
    "title",
    "imageOne",
    "imageTwo",
    "imageThree",
    "imageFour",
    "imageFive",
    "category",
  ]);
  console.log("projects", posts);
  return posts;
}
