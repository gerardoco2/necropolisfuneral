import { generaTxt } from "@/utils/generaTxt";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { exec } from "child_process";

export async function POST(request: NextRequest) {
  // Parse the request body
  const data = await request.json();
  //const { cedula, nombre, apellido, fechaNac, edad, parentesco } = data;
  console.log("Data received:", data);

  // Define the content and file details

  let content = `Nombre: ${data.nombre}\nApellido: ${data.apellido}\nCedula: ${data.cedula}\nFecha de Nacimiento: ${data.fechaNac}\nEdad: ${data.edad}\nParentesco: ${data.parentesco}`;

  for (let i = 0; i < data.beneficiario.length; i++) {
    content += `\nBeneficiario ${i + 1}:\nNombre: ${data.beneficiario[i].nombre}\nApellido: ${data.beneficiario[i].apellido}\nCedula: ${data.beneficiario[i].cedula}\nFecha de Nacimiento: ${data.beneficiario[i].fechaNac}\nEdad: ${data.beneficiario[i].edad}\nParentesco: ${data.beneficiario[i].parentesco}`;
  }
  const nombreArchivo = "cedula.txt";
  const directory = "../archivos-procesa"; // guarda en "generated-files" directory
  //const directory = "./generated-files"; // guarda en "generated-files" directory

  // Genera el archivo
  generaTxt(content, nombreArchivo, directory);

  // Ejecuta el script en procesa
  // const scriptPath = path.join(process.cwd(), "procesa.sh");
  // const command = `bash ${scriptPath} ${data.cedula}`;
  // console.log("Executing command:", command);
  // await new Promise((resolve, reject) => {
  //   exec(command, (error, stdout, stderr) => {
  //     if (error) {
  //       console.error("Error executing script:", error);
  //       reject(error);
  //     } else {
  //       console.log("Script executed successfully:", stdout);
  //       resolve(stdout);
  //     }
  //   });
  // });
  // Respondecon un mensaje de éxito
  // res.status(200).json({ message: "Archivo generado con exito!" });
  return NextResponse.json({ status: 200 });
}
