import fs from "fs";
import readline from "readline";

export const leeArchivo = (filePath) => {
  // crea un stream para leer por linea
  const fileStream = fs.createReadStream(filePath);

  // crea una interfaz para leer el archivo linea por linea
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Reconoce todas las instancias de CR LF ('\r\n') como un salto de linea sencillo
  });

  // arreglo para guardar lineas leidas
  const lines = [];

  for (const line of rl) {
    lines.push(line); // Add each line to the array
  }
  return lines;
};
