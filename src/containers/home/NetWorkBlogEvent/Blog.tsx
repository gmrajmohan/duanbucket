import Image from "next/image";
import type { FC } from "react";

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  const blogArr = [
    {
      id: 1,
      image: "/assets/networkblogevent/blog.jpg",
      title: "Blog",
      content: "Modern Work Management Using Microsoft Project",
    },
    {
      id: 2,
      image: "/assets/networkblogevent/blog.jpg",
      title: "Blog",
      content: "Inbound Marketing – What is it? & why does it matter?",
    },
    {
      id: 3,
      image: "/assets/networkblogevent/blog.jpg",
      title: "Blog",
      content: "Modern Work Management Using Microsoft Project",
    },
   
  ];
  return (
    <>
      <div className="lg:flex justify-between items-center mt-14 mb-14 gap-5">
        {blogArr.map((values) => (
          <div key={values.id} className="mb-10">
            <Image src={values.image} width={450} height={180} alt="img" />
            <h3 className="mt-4 text-orange-600 font-semibold text-[20px]">{values.title}</h3>
            <p className="mt-1 lg:w-[70%]">{values.content}</p>
          </div>
        ))}
      
      </div>
    </>
  );
};
export default Blog;
