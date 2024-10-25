import Image from "next/image";
import { getDocuments } from "outstatic/server";

export default async function Index() {
  const projects = await getData();

  if (projects) {
    return (
      <>
        {projects
          .filter(({ data }) => data.length > 1)
          .map(({ collectionName, data }) => (
            <div key={collectionName}>
              <h2 className="text-lg font-semibold mt-4 mb-8">{collectionName}</h2>
              {data.map(
                ({
                  title,
                  imageOne,
                  imageTwo,
                  imageThree,
                  imageFour,
                  imageFive,
                }: any) => (
                  <div key={title}>
                    <h1 className="text-xl font-bold leading-10">{title}</h1>
                    <div className="flex items-center gap-[12px]">
                      {[imageOne, imageTwo, imageThree, imageFour, imageFive]
                        .filter(Boolean)
                        .map((image, index) => (
                          <Image
                            key={index}
                            width={200}
                            height={200}
                            alt={`${title} - Image ${index + 1}`}
                            src={image}
                            className="h-[200px] w-[200px]"
                          />
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
      </>
    );
  }
}

export async function getData() {
  const collections = [
    { name: "Construction", slug: "construction" },
    { name: "Civil", slug: "civil" },
    { name: "Commercial Interior Design", slug: "commercial-interior-design" },
    { name: "Residential Interior Design", slug: "residential-interior-design" },
  ];

  const posts = collections.map((collection) => ({
    collectionName: collection.name,
    data: getDocuments(collection.slug, [
      "title",
      "imageOne",
      "imageTwo",
      "imageThree",
      "imageFour",
      "imageFive",
    ]),
  }));

  return posts;
}


export async function getCollectionName() {
  const collections = [
    { name: "Construction", slug: "construction" },
    { name: "Civil", slug: "civil" },
    { name: "Commercial Interior Design", slug: "commercial-interior-design" },
    { name: "Residential Interior Design", slug: "residential-interior-design" },
  ];

  const posts = collections.map((collection) => ({
    collectionName: collection.name,
    data: getDocuments(collection.slug, [
      "title",
      "imageOne",
      "imageTwo",
      "imageThree",
      "imageFour",
      "imageFive",
    ]),
  }));

  const filteredCollections = posts.filter(post => post.data.length >= 1);

  return filteredCollections.map(post => post.collectionName);
}
