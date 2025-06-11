import { generaTxt } from "@/utils/generaTxt";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { exec } from "child_process";

interface Afiliado {
  cedula: string;
  nombre: string;
  estatus: string;
  nomina: string;
  beneficiario?: Beneficiario[];
}

interface Beneficiario {
  cedula: string;
  nombre: string;
  parentesco: string;
  fechaNac?: string;
  edad?: string;
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  let content = data.cedula;
  const nombreArchivo = "CEDULA.TXT";
  const directory = "../archivos-procesa"; // guarda en "generated-files" directory

  // Genera el archivo
  generaTxt(content, nombreArchivo, directory);

  // Ejecuta el script en procesa
  const scriptPath = path.join(
    process.cwd(),
    "/src/scriptsProcesa/ejec_pvx_verifica_cedula",
  );
  const command = `bash ${scriptPath}`;
  console.log("Executing command:", command);

  const afiliado = await new Promise<Afiliado>((resolve, reject) => {
    console.log("Executing dentro del promise:", command);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing script:", error);
        reject(error);
        return;
      }
      console.log("Script executed successfully:", stdout);
      // leer el contenido del archivo generado
      const filePath = path.join(directory, "SIONO.TXT");
      const fs = require("fs");
      fs.readFile(filePath, "utf8", (err: any, data: string) => {
        if (err) {
          console.error("Error reading file:", err);
          reject(err);
          return;
        }
        console.log("File content:", data);

        // CONVIERTE EL CONTENIDO DEL ARCHIVO EN UN OBJETO JSON DE TIPO Afiliado
        const lines = data.split("\n");
        const adiliado: Afiliado = {
          cedula: lines[0].trim(),
          nombre: lines[1].trim(),
          estatus: lines[2].trim(),
          nomina: lines[3].trim(),
          beneficiario: [],
        };
        for (let i = 4; i < lines.length; i++) {
          const parts = lines[i].split(";");
          if (parts.length >= 4) {
            const beneficiario: Beneficiario = {
              cedula: parts[0].trim(),
              nombre: parts[1].trim(),
              parentesco: parts[2].trim(),
              fechaNac: parts[3].trim(),
              edad: parts[4] ? parts[4].trim() : undefined,
            };
            afiliado.beneficiario?.push(beneficiario);
          }
        }
        console.log("Afiliado object:", afiliado);
        //return NextResponse.json({ status: 200, afiliado: afiliado });
        resolve(afiliado);
      });
    });
  });
  // restorna una respuesta JSON con el estado 200 y el objeto afiliado
  return NextResponse.json({ status: 200, afiliado });
}
