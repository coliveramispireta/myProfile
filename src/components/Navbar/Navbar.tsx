import Image from "next/image";
import React from "react";
import NextImage from "../../../public/next.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="static">
      <div className="w-full mt-[-7%] md:mt-0 max-w-5xl items-center justify-between font-mono text-sm flex">
        <div className="mt-[-2.5%] text-gray-200 static size-auto bg-none ">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
           &nbsp;
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

        <div className="mt-[-2.5%] text-gray-200 static size-auto bg-none ">
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

     

      <div className="mb-8 lg:mb-0 flex flex-col items-center justify-center text-center">
  <Image
    className="mt-[-1.5%] border rounded-full border-gray-600 shadow-2xl"
    src="/myImage.png"
    alt="Next.js Logo"
    width={180}
    height={180}
  />
  <h1 className="text-white font-mono text-[185%] md:text-[300%] lg:text-[400%]">
    Carlos Manuel Olivera Mispireta
  </h1>
  <h1 className="text-green-400 font-mono text-xl lg:text-3xl">
    Developer Frontend
  </h1>
</div>




      

<div className="mt-6 left-0 z-50 w-full h-16  ">
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link href={"/resume"} type="button" className="inline-flex flex-col items-center justify-center px-5 border-gray-600 border-x hover:bg-gray-800  group ">
            <svg className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span className="text-sm text-gray-500  group-hover:text-blue-300 ">Resumen</span>
        </Link>
        <Link href={"/projects"} type="button" className="inline-flex flex-col items-center justify-center px-5 border-e border-gray-600 hover:bg-gray-800  group ">
            <svg className="w-5 h-5 mb-2 text-gray-500  group-hover:text-blue-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
            </svg>
            <span className="text-sm text-gray-500  group-hover:text-blue-300 ">Proyectos</span>
        </Link>
        <Link href={"/services"}type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800  group">
            <svg className="w-5 h-5 mb-2 text-gray-500  group-hover:text-blue-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            <span className="text-sm text-gray-500  group-hover:text-blue-300 ">Servicios</span>
        </Link>
        <Link href={"/contact"} type="button" className="inline-flex flex-col items-center justify-center px-5 border-gray-600 hover:bg-gray-800  group border-x ">
            <svg className="w-5 h-5 mb-2 text-gray-500  group-hover:text-blue-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <span className="text-sm text-gray-500  group-hover:text-blue-300 ">Contacto</span>
        </Link>
    </div>
</div>



    </div>
  );
};

export default Navbar;