import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Docs",
    description: "Manual de usuario sistema Kiosko Trastienda",
    themeConfig: {
        logo: "/assets/logo/LOGOGRIS.svg",
        siteTitle: false,
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: "local"
        },

        nav: [
            { text: "Inicio", link: "/" },
            { text: "Docs", link: "/introduction" },
            {
                // Dropdown Menu
                text: "Cambios",
                items: [{ text: "v 1.0" }]
            }
        ],

        sidebar: [
            {
                text: "Cómo empezar  ",
                collapsed: true,
                collapsible: true,
                items: [
                    { text: "Introducción", link: "/introduction" },
                    { text: "Guía de Inicio", link: "/quickstart" },
                    { text: "Arquitectura", link: "/arquitectura" },
                    { items: [{ text: "Base Datos", link: "/basedatos" }] },
                    {
                        text: "Configuración Inicial",
                        link: "/configuracioninicial"
                    },
                    {
                      text: "Equipo",
                      link: "/team"
                  },
                   
                ]
            },
            {
                text: "Usuarios del sistema",
                collapsible: true,
                collapsed: true,
                items: [
                    { text: "Roles" },
                    {
                        items: [
                            { text: "Almacén", link: "/users_rol_almacen" },
                            { text: "Mostrador", link: "/users_rol_mostrador" },
                            {
                                text: "Administrador",
                                link: "/users_rol_administrador"
                            }
                        ]
                    }
                ]
            }
        ],
        // .vitepress/config.js
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-Serrot Consultores"
        }
    }
});
