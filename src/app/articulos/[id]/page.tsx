import {
  Box,
  Image,
  VStack,
  Heading,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import featuresData from "@/components/Servicios/featuresData";
import { Feature } from "@/types/feature";
// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const BlogoPage = () => {
  // const articulo = featuresData.find((articulo) => articulo.id === +params.id);

  return (
    <Box maxW="800px" mx="auto" p={4} className="rounded-lg bg-white shadow-lg">
      <Image src="" alt="" className="h-64 w-full rounded-t-lg object-cover" />

      <VStack spacing={4} align="start" p={4}>
        <Heading as="h1" size="xl" className="text-black">
          {/* {articulo?.title} */}
        </Heading>
      </VStack>

      <Divider className="my-4" />

      <Text className="leading-relaxed text-black">
        {/* {articulo?.description} */}
      </Text>
    </Box>
  );
};

export default BlogoPage;
