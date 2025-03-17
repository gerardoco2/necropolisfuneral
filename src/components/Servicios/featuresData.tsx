import { Feature } from "@/types/feature";
import {
  House,
  Binoculars,
  Flower2,
  Sun,
  Bus,
  Hospital,
  Component,
  Flame,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: House,
    title: "Servicios Funerarios",
    description:
      "En Domicilio: Incluye la Tanatopraxia sencilla o especial, catafalco, capilla movible, sillas, carroza para búsqueda y sepelio, otros servicios que ameriten según contrato. En nuestras Agencias: Incluye Tanatopraxia sencilla o especial, área acondicionada, cuarto de acompañamiento (No Obligatorio), carroza para búsqueda y sepelio, servicio de cafetería, protocolo de atención y otros servicios que ameriten según contrato.",
  },
  {
    id: 2,
    icon: Bus,
    title: "Traslado a Nivel Regional y Nacional",
    description:
      "Traslado de cadáveres, restos cadavéricos, animales domésticos y cenizas.",
  },
  {
    id: 3,
    icon: Sun,
    title: "Desinfección de Áreas:",
    description:
      "Dirigido a empresas, locales comerciales, oficinas, clínicas, casas o apartamentos, áreas comunes privadas y públicas, utilizamos sustancias químicas para la eliminación de bacterias y virus.",
  },
  {
    id: 4,
    icon: Hospital,
    title: "Tanatopraxia y Resguardo",
    description:
      "Nuestras agencias cuentan con una sala acondicionada de Tanatopraxia donde ofrecemos diferentes tipos de servicios tales como: Tanatopraxia normal, Tanatopraxia especial, Tanatoestética, Embalsamiento, Extracción de marcapasos y otros objetos metálicos, Resguardo de cadáveres, Reconstrucción normal de rostro ,Liposucción post mortem, Atendemos en su domicilio",
  },
  {
    id: 5,
    icon: Binoculars,
    title: "Contratos Colectivos",
    description:
      "Dirigido a entes gubernamentales, cajas de ahorro, sindicatos, empresas, industrias y cooperativas. Nuestros convenios se ajustan a su presupuesto, tenemos mini contratos a partir de 25 titulares sin inicial y los colectivos a partir de 50 Titulares sin inicial, cada titular puede afiliar: Padre, Madre, Hijos y Cónyuge sin límite de edad o cualquier familiar segun convenio, o en su defecto lo que se establezca entre las partes.",
  },
  {
    id: 6,
    icon: Binoculars,
    title: "Contrato Individual",
    description:
      "Contratos Individuales: Dirigido al público en general, el titular puede afiliar en su carga familiar consanguínea directa (Padre, Madre, Hijos y Cónyuge sin límite de edad) o cualquier familiar consanguíneo menor de 65 años, hasta un máximo de 07 familiares más titular. Contempla servicio en domicilio (ciudad de coro y la vela) o en nuestras agencias. En Domicilio Únicamente en la zona metropolitana de Coro hasta La Vela de Coro: Incluye una Tanatopraxia sencilla, 01 catafalco, 01 capilla movible, 20 sillas, 01 carroza para búsqueda y sepelio en el cementerio metropolitano de Coro, cementerio Guadalupe sector La Negrita o cementerio municipal de La Vela. En nuestras Agencias Funerarias: Incluye una Tanatopraxia sencilla, área acondicionada para velación, cuarto de acompañamiento (No Obligatorio), carroza para búsqueda y sepelio en el cementerio metropolitano de Coro, Guadalupe sector La Negrita o cementerio municipal de La Vela, servicio de cafetería y protocolo de atención. Condiciones de pago: Pago de una inicial Única Anual de 10$, Pago de 12 cuotas mensuales de 5$, Forma de pago: transferencia en Bolívares según tasa oficial del Banco Central de Venezuela, o divisas en físico dólar o euros. Estos precios son ajustables con previo aviso al afiliado, puede pagar cuotas por adelantado.",
  },
  {
    id: 7,
    icon: Component,
    title: "Servicios Corporativos",
    description:
      "Asesorías para mejoras de estructuras físicas y organizacionales de cementerios.Certificación para Asesor Funerario y Director Funerario. Planificación catastral de Unidades de enterramiento verticales y horizontales. Asesorías sobre ordenanza de ley municipal sobre cementerio, crematorio y servicios funerarios. Historización de personalidades. Gentrificación de cementerios. Planificación y Ejecución de Proyectos para cementerios y agencias de funerarias. Presentación de las Alternativas Mundiales. Asesorías Online",
  },
  {
    id: 8,
    icon: Flame,
    title: "Servicio de Cremacion",
    description:
      "Ofrecemos los servicios de cremación con traslado de cadáveres, restos cadavéricos o de mascotas domesticas con nuestros aliados comerciales a nivel regional y nacional, ventas de urnas para cenizas y relicarios.",
  },
  {
    id: 9,
    icon: Flower2,
    title: "Floristeria",
    description:
      "Onfiori Per Floristeria te ofrece sus diferentes arreglos florales, coronas, bouquets, cruz familiar, caminos, ramilletes, decoraciones y  arreglos de todos tipo.",
  },
];

export default featuresData;
