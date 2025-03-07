import { generaTxt } from "@/utils/generaTxt";
import { leeArchivo } from "@/utils/leeArchivo";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import readline from "readline";

interface Props {
  params: { cedula: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  //Define el contenido del archivo y los detalles
  const contentenido = params.cedula;
  const filename = "cedula.txt";
  const directory = "./archivos-generados"; //guarda en directorio llamado archivos-generados

  // Genera el archivo
  generaTxt(contentenido, filename, directory);

  // ejecuta script en procesa
  // esperar respuesta de procesa
  // leer archivo generado por procesa
  const filePath = path.join(
    process.cwd(),
    "archivos-procesa",
    `${contentenido}.txt`,
  ); // ajustar el pathh segun sea necesario

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ mensaje: "no existe el archivo" });
  }

  try {
    // let lineas = leeArchivo(filePath);
    // crea un stream para leer por linea
    const fileStream = fs.createReadStream(filePath);

    // crea una interfaz para leer el archivo linea por linea
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity, // Reconoce todas las instancias de CR LF ('\r\n') como un salto de linea sencillo
    });

    // arreglo para guardar lineas leidas
    const lines = [];

    for await (const line of rl) {
      lines.push(line); // agrega cada linea al arreglo
    }
    // Retorna las lineas en una respuesta json
    return NextResponse.json({ status: 200, contenido: { lineas: lines } });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      contenido: "Error leyendo el archivo",
    });
  }
}
