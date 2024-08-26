import Image from "next/image";
import React from "react";
import NextImage from "../../../public/next.svg";

const Profile = () => {
  return (
    <>
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="mt-[-2%] text-gray-200 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            By &nbsp;
            <svg
              width="8rem"
              height="8rem"
              viewBox="0 0 130 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-module_logo__1h88B"
            >
              <path
                d="M22.99 0h-8.523v23.995h8.522V0ZM9.245 0H.691v23.995h8.554V0ZM38.718 15.038v2.147h9.095V24H30.227V0h17.107v6.815h-8.616v2.047M54.094 0h9.515l4.96 11.725V0h7.562v24h-8.117l-6.331-13.09V24h-7.589V0ZM100.092 14.435c2.053-1.174 3.364-3.056 3.364-6.207v-.125C103.456 2.9 100.299 0 93.464 0h-10.06V24h8.491v-7.62h.478L95.93 24h8.874l-4.713-9.565ZM121.214 0l-.217.644a.314.314 0 0 0-.022.05l-.475 1.418-2.118 6.251-2.57-7.72-.203-.643h-9.226l7.386 13.827v10.168h8.567V13.796L129.384 0h-8.171.001Z"
                fill="#b3b3b3"
              ></path>
              <path
                d="M90.267 8.3c-6.931.495-14.155 1.12-21.563 1.881a662.834 662.834 0 0 0-41.485 5.582C18.318 17.26 9.449 19.017.69 21.253V13.66A576.47 576.47 0 0 1 22.99 11a747.63 747.63 0 0 1 30.266-2.435c13.113-.805 25.612-1.264 36.94-1.404v.64c0 .165.027.314.05.449a.124.124 0 0 0 .022.05h-.001Z"
                fill="#FFE84D"
              ></path>
              <path
                d="M96.45 7.652c-.02.082-.05.162-.086.239a1.165 1.165 0 0 1-.451.45 7.522 7.522 0 0 1-3.296.927h-.276c-.074.242-.183.47-.324.68-.582.796-1.574.112-1.574.112s.199.023.527-.324c.164-.175.272-.394.312-.63a1.155 1.155 0 0 1-.551-.95V8.11a.245.245 0 0 1 0-.063c0-.117-.031-.248-.04-.387a5.792 5.792 0 0 1 0-.613 2.46 2.46 0 0 1 .026-.256.9.9 0 0 1 .366-.626 1.232 1.232 0 0 0-.388-.54c-.374-.293-.569-.175-.569-.248 0 0 .902-.814 1.57-.108.16.175.294.37.4.581l.294-.031a7.521 7.521 0 0 1 3.39.45c.302.115.539.354.65.657.04.104.064.213.072.324.005.136-.013.271-.054.4h.001Z"
                fill="#000"
              ></path>
            </svg>
          </a>
        </div>

        <div className="mt-[-2%] text-gray-200 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="logo"
              src={NextImage}
              alt="Next.js Logo"
              width={200}
              height={200}
            />
          </a>
        </div>
      </div>

      <div className="mt-[-1%] border rounded-full border-gray-600 shadow-2xl ">
        <Image
          className=""
          src="/myImage.jpg"
          alt="Next.js Logo"
          width={200}
          height={200}
        />
      </div>
      <div className=" items-center justify-center self-center content-center text-center">
        <h1 className="text-white font-mono text-[400%]">
          Carlos Manuel Olivera Mispireta
        </h1>
        <h1 className="text-green-400 font-mono sha  text-3xl">
          Developer Frontend
        </h1>
      </div>

      <div className="text-white px-24 font-extralight text-center">
        <h1>¡Hola! 👋</h1>
        <br />
        <h1>
          Soy Carlos Olivera Mispireta, Técnico en C. Informática, especializado
          como Full Stack Developer, mi experiencia se centra en el desarrollo
          frontend. Trabajo con tecnologías como Next.js, Tailwind, React, Vite,
          Boostrap, etc para la creación de estructuras adaptables y estilos
          responsivos en CSS y HTML5; así como con NodeJS, Express, typeORM,
          MongoDB, Postgres, etc, para el Backend. Además, también tengo
          experiencia en el análisis de datos, transformando información en
          dashboards interactivos que permiten visualizar de manera impactante
          patrones y tendencias.
        </h1>
        <h1>
          En resumen, me encanta programar! disfruto cada detalle y cada reto.
          Mi objetivo es seguir evolucionando y nunca dejar de aprender!
          #ObsesionadoConElCodigoLimpio
        </h1>
        <br />
        <h1>
          #DesarrolloWeb #FrontendDeveloper #IngenieríaDeSistemas
          #AprendizajeContinuo #AnálisisDeDatos #DashboardsInteractivos
        </h1>
      </div>
    </>
  );
};

export default Profile;
