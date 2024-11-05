"use client";
// import PostData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Post } from "@/types/blog";
import axios from "axios";
import { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Blog Page - Solid SaaS Boilerplate",
//   description: "This is Blog page for Solid Pro",
//   // other metadata
// };

// interface Props {
//   posts: Post[];
// }

const BlogPage = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQWRPbVVhSS1STUFhSl81dHQxVmozOHNSMlU2a0NrSlRSQS1nQkRsRWVmMThmeXlUcl9MYWNwamZAOWEtIUHR1Y0w3dDFwUGZATUHRhUlQ0VjVOeTBTVDdjaUtTRkJkOGRtTFZA6X0lzeHhYTW9mQUhYUjlaVU9udGMZD",
      )
      .then((resp) => {
        console.log(resp.data.data);
        setNoticias(resp.data.data);
      });
  }, [noticias]);

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {noticias &&
              noticias.map((post, key) => <BlogItem key={key} post={post} />)}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
