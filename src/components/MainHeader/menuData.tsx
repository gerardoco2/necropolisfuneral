import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Servicios",
    newTab: false,
    path: "/#servicios",
  },
  {
    id: 2.1,
    title: "Noticias",
    newTab: false,
    path: "/noticias",
  },
  {
    id: 2.3,
    title: "Galeria",
    newTab: false,
    path: "/galeria",
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Afiliacion",
    newTab: false,
    path: "/afiliacion",
  },
];

export default menuData;
