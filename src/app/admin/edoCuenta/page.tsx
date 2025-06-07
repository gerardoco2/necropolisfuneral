"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useEffect, useState } from "react";

const EdoCuentaPersonal = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/edoCuentaPersonal");
        if (!response.ok) {
          throw new Error("Fallo la carga de los datos");
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Error al cargar los datos");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div>EdoCuentaPersonal</div>
    </DefaultLayout>
  );
};

export default EdoCuentaPersonal;
