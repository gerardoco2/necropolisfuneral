"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import BlogItem from "./BlogItem";
import posts from "./blogData";
import { Post } from "@/types/blog";
import axios from "axios";
import Image from "next/image";

interface Props {
  posts: Post[];
}

const Blog = ({ posts }: Props) => {
  const [noticias, setNoticias] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQWRPbVVhSS1STUFhSl81dHQxVmozOHNSMlU2a0NrSlRSQS1nQkRsRWVmMThmeXlUcl9MYWNwamZAOWEtIUHR1Y0w3dDFwUGZATUHRhUlQ0VjVOeTBTVDdjaUtTRkJkOGRtTFZA6X0lzeHhYTW9mQUhYUjlaVU9udGMZD",
      )
      .then((resp) => {
        setNoticias(resp.data.data);
      });
  }, [noticias]);
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Mantente al dia`,
              subtitle: `Noticias y Obituarios`,
              description: `Aqui podras encontrar nuestros obituarios y noticias mas recientes.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {noticias &&
            noticias.slice(0, 3).map((post) => (
              <BlogItem post={post} key={post.id} />

              //  <div key={post.id}>
              //   <Image src={post.media_url} alt={post.caption} width={250} height={250}/>
              //  </div>
            ))}

          {/* {posts.slice(0, 3).map( (blog, key) => {
              <BlogItem post={post} key={key}/>
          })} */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
