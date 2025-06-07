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

  let content = `${data.cedula}\n${data.nombre} ${data.apellido}\n${data.contrato}`;

  for (let i = 0; i < data.beneficiario.length; i++) {
    content += `\n${data.beneficiario[i].cedula};${data.beneficiario[i].nombre} ${data.beneficiario[i].apellido};${data.beneficiario[i].fechaNac};${data.beneficiario[i].edad};${data.beneficiario[i].parentesco}`;
  }
  const nombreArchivo = "AFILIACION.TXT";
  const directory = "../archivos-procesa"; // guarda en "generated-files" directory
  //const directory = "./generated-files"; // guarda en "generated-files" directory

  // Genera el archivo
  generaTxt(content, nombreArchivo, directory);

  // Ejecuta el script en procesa
  const scriptPath = path.join(
    process.cwd(),
    "/src/scriptsProcesa/ejec_pvx_nueva_afiliacion",
  );
  const command = `bash ${scriptPath}`;
  console.log("Executing command:", command);
  await new Promise((resolve, reject) => {
    console.log("Executing dentro del promise:", command);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing script:", error);
        reject(error);
      } else {
        console.log("Script executed successfully:", stdout);
        resolve(stdout);
      }
    });
  });
  return NextResponse.json({ status: 200 });
}
