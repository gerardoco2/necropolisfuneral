"use client";
import BeneficiariosList from "@/components/Beneficiarios/BeneficiariosList";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const EdoCuentaPersonal = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { data: session } = useSession();

  const beneficiarios = session?.afiliado?.beneficiario ?? [];

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Estado de Cuenta Personal</h1>
      {session?.afiliado ? (
        <>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Datos del Afiliado</h2>
            <ul className="mb-2">
              <li>
                <strong>Cédula:</strong> {session.afiliado.cedula}
              </li>
              <li>
                <strong>Nombre:</strong> {session.afiliado.nombre}
              </li>
              <li>
                <strong>Estatus:</strong> {session.afiliado.estatus}
              </li>
              <li>
                <strong>Nómina:</strong> {session.afiliado.nomina}
              </li>
            </ul>
          </div>
          <BeneficiariosList beneficiarios={beneficiarios} />
        </>
      ) : (
        <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};

export default EdoCuentaPersonal;
