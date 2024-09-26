'use client'

import React, { useEffect, useState } from 'react';

const Proyects = () => {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayVideo(true);
    }, 10000); // 10 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador en desmontaje
  }, []);

  return (
    <>
    <div className='block md:hidden lg:hidden mt-8'>

      <h3 className="text-xl font-semibold text-gray-300 ">Proyecto Henry</h3>
      <p className="mt-2 text-gray-400 text-center">
        Aplicación web full stack: demostrando habilidades adquiridas - Next.js, TypeScript, y Tailwind.
        </p>
        <div className='block md:hidden lg:hidden text-right'>
        <a
          className="inline-block mt-4 text-blue-400 font-semibold text-right"
          href="https://www.youtube.com/watch?v=L0moE2LJ9AA"
          target="_blank"
          rel="noopener noreferrer"
          >
          Ver Ahora
        </a>
            </div>
          </div>

    <div className=" justify-center max-w-3xl mb-28 md:mb-0 mt-4  bg-gray-800 shadow-2xl rounded-lg overflow-hidden flex opacity-50 hover:opacity-100">
      <div className="w-3/3 md:w-2/3">
        {playVideo ? (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/L0moE2LJ9AA?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
          className="w-full h-full"
          src="/Proyect.PNG"
          alt="Video Thumbnail"
          />
        )}
      </div>

    

      <div className="md:w-1/3  p-4 hidden md:block">
        <h3 className="text-xl font-semibold text-gray-500 ">Proyecto Henry</h3>
        <p className="mt-2 text-gray-600">
        Aplicación web full stack: demostrando habilidades adquiridas - Next.js, TypeScript, y Tailwind.
        </p>
        <a
          className="inline-block mt-4 text-blue-600 font-semibold"
          href="https://www.youtube.com/watch?v=L0moE2LJ9AA"
          target="_blank"
          rel="noopener noreferrer"
          >
          Ver Ahora
        </a>
      </div>
    </div>
          </>
  );
};

export default Proyects;
