"use client";
import { Post } from "@/types/blog";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ post }: { post: Post }) => {
  // const { mainImage, title, metadata } = blog;
  const { media_url, caption, media_type, id } = post;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white shadow-solid-8 dark:bg-blacksection"
      >
        <Link
          href={`/noticias/noticia-detail/${id}`}
          className="relative block aspect-[600/600]"
        >
          {/* <Image src={media_url} alt={caption} fill /> */}
          {media_type == "VIDEO" ? (
            <video muted preload="none" autoPlay playsInline>
              <source src={media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image src={media_url} alt="pic" fill />
          )}
        </Link>
      </motion.div>
    </>
  );
};

export default BlogItem;

// {     <div className="px-4">
//   <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
//     <Link href={`/noticias/noticia-detail`}>
//       {/* {`${caption.slice(0, 40)}...`} */}
//     </Link>
//   </h3>
//   <p className="line-clamp-3">{caption}</p>
// </div>}
