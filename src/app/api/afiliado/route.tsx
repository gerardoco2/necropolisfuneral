import { generaTxt } from "@/utils/generaTxt";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export function GET(request: NextRequest) {
  // Define the content and file details
  // const content = "12345";
  // const filename = "cedula.txt";
  const directory = "./generated-files"; // Save in a "generated-files" directory
  // console.log("este es el directorio: ", directory);
  // Generate the file
  generaTxt("content", "cedula.txt", directory);

  // Respond with a success message
  // res.status(200).json({ message: "File generated successfully!" });
  return NextResponse.json({ status: 200 });
}
