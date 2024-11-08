import { Blog } from "@/types/blog";
import { Post } from "@/types/blog";
import axios from "axios";
import { useEffect, useState } from "react";

const PostData: Post[] = [];

async function fetchInstagramPosts() {
  try {
    //acces token of dailyfitness tips IGQWRPbVVhSS1STUFhSl81dHQxVmozOHNSMlU2a0NrSlRSQS1nQkRsRWVmMThmeXlUcl9MYWNwamZAOWEtIUHR1Y0w3dDFwUGZATUHRhUlQ0VjVOeTBTVDdjaUtTRkJkOGRtTFZA6X0lzeHhYTW9mQUhYUjlaVU9udGMZD

    // gerardo acces token IGQWROYWY2NnlFR2hwQVUxNU1kRXpDblZAkcDVISkZASY3JPUDBSamhwN3Q4NXFCck4tZAURrMDRyX2YxellaY21UV1FOWjRtRHdBamZAjdXJzYTZAseHdDdWZAKcnZACclp4SkNaeTd6NVRTbzMyUDhDMldXbHAtNThRTGMZD
    axios
      .get(
        "https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQWRQeUdqcGhRZADZAQWFNENGh6d1Y2UTZAkdzF4OTJVdGpBRV9SQ0c3MmgyM0l4M2h3cm0wcmlWYmJEMGljT1dNMXFLbEZAOVmFqd2lyODJ2ZAWhuaFBObFV1MnRpRnA5Vkk4clJvUGx5aFZAqaUdwNkZATU0dxUXZA3WGcZD",
      )
      .then((resp) => {
        PostData.push(...resp.data.data);
      });
  } catch (err) {
    console.log("Ocurrio error obteniendo los posts: ", err);
  }
}

fetchInstagramPosts();

export default PostData;
// const BlogData: Blog[] = [
//   {
//     _id: 1,
//     mainImage: "/images/blog/blog-01.png",
//     title: "Gremio Funerario de Falcon",
//     metadata:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
//   },
//   {
//     _id: 2,
//     mainImage: "/images/blog/blog-02.png",
//     title: "Nuevos convenios funerarios ",
//     metadata:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
//   },
//   {
//     _id: 2,
//     mainImage: "/images/blog/blog-03.png",
//     title: "Sabemos que tu tiempo ",
//     metadata:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
//   },
//   {
//     _id: 1,
//     mainImage: "/images/blog/blog-03.png",
//     title: "Gremio Funerario de Falcon",
//     metadata:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
//   },
//   {
//     _id: 2,
//     mainImage: "/images/blog/blog-04.png",
//     title: "Gremio Funerario de Falcon",
//     metadata:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
//   },
//   {
//     _id: 2,
//     mainImage: "/images/blog/blog-01.png",
//     title: "Gremio Funerario de Falcon.",
//     metadata:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
//   },
// ];

// export BlogData;
