import fs from "fs";
import path from "path";

export const generaTxt = (contenido, nombreArchivo, directorio) => {
  if (!fs.existsSync(directorio)) {
    fs.mkdirSync(directorio, { recursive: true });
  }

  const filePath = path.join(directorio, nombreArchivo);

  fs.writeFileSync(filePath, contenido);

  //   console.log(`Se genero un archivo en ${filePath} `);
};
