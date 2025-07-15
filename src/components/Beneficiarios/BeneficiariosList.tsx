import React from "react";

interface Beneficiario {
  cedula: string;
  nombre: string;
  parentesco: string;
  fechaNac: string;
}

export default function BeneficiariosList({
  beneficiarios,
}: {
  beneficiarios: Beneficiario[];
}) {
  if (!beneficiarios || beneficiarios.length === 0) {
    return <p className="text-gray-500">No hay beneficiarios registrados.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="mb-2 text-xl font-semibold">Beneficiarios</h2>
      <div className="overflow-x-auto">
        <table className="border-gray-300 min-w-full rounded border bg-white dark:bg-boxdark">
          <thead>
            <tr className="bg-gray-100 dark:bg-boxdark-2">
              <th className="border-b px-4 py-2">Cédula</th>
              <th className="border-b px-4 py-2">Nombre</th>
              <th className="border-b px-4 py-2">Parentesco</th>
              <th className="border-b px-4 py-2">Fecha Nac.</th>
            </tr>
          </thead>
          <tbody>
            {beneficiarios.map((b) => (
              <tr
                key={b.cedula}
                className="hover:bg-gray-50 dark:hover:bg-bodydark"
              >
                <td className="border-b px-4 py-2">{b.cedula}</td>
                <td className="border-b px-4 py-2">{b.nombre}</td>
                <td className="border-b px-4 py-2">{b.parentesco}</td>
                <td className="border-b px-4 py-2">{b.fechaNac}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
