import type { NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SumateGif from '/public/assets/sumate-2022.gif'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Red Gestión Cultural Pública</title>
        <meta name="description" content="Red Gestión Cultural Pública" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Navbar></Navbar>
    <main className="container mx-auto flex flex-col min-h-screen">

      <div id="Metodo-accion" className="bg-hands py-12 md:py-20">
        <div className="p-4 md:p-0">
          <div className="flex flex-col justify-around items-center text-left">
          <h1 className="text-3xl text-bold text-rc-white">Del método a la acción </h1>
          <a className="text-rc-yellow hover:underline text-xl font-bold"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd5BTOPf-Obe6Y9AQ-SXx_fwevTiO2xSEjzXDXH9KJ-PXQBrQ/viewform">
              <span>Relevamiento de experiencias culturales</span>
          </a>
          <p className="text-xl text-rc-white mb-5 md:mb-0">¡Pronto más novedades!
          </p>
          </div>
        </div>
      </div>
      <div id="Lab-cultural" className="bg-lights py-12 md:py-20">
        <div className="p-4 md:p-0">
          <div className="flex flex-col justify-around items-center text-left">
          <h2 className="text-3xl text-bold text-rc-white">LAB Cultural participativo</h2>
          <p className="text-xl text-rc-white mb-5 md:mb-0">Estamos trabajando en el diseño de un laboratorio
          ciudadano <br className="hidden md:block"/> para la toma de decisiones en políticas culturales.
          </p>
          </div>
        </div>
      </div>
      <div id="Lab-cultural" className="bg-people py-12 md:py-20">
        <div className="p-4 md:p-0">
          <div className="flex flex-col justify-around items-center text-left">
          <h2 className="text-3xl text-bold text-rc-white">Observatorio <br className="hidden md:block"/>de Gestión Cultural de Córdoba</h2>
          <p className="text-xl text-rc-white mb-5 md:mb-0">Proyecto seleccionado por Gestionar Futuro<br className="hidden md:block"/> del Ministerio de Cultural de la Nación.
          </p>
          </div>
        </div>
      </div>

      <section id="frase" className='my-12 flex flex-col justify-around items-center md:px-9'>
      <p className="text-sm text-rc-black">“Las redes culturales son instrumentos que refuerzan las líneas de trabajo de interés común y apoyan al trabajo de las instituciones vinculadas. 
        Entre sus funciones, se encuentra el fortalecimiento de las diversidades culturales, la promoción y defensa de los derechos culturales y la promoción 
        de espacios de concertación y acción intersectorial, que sustenten el seguimiento, la comunicación y la transferencia de resultados de las acciones bilaterales y multilaterales. 
        El desarrollo de las redes de cooperación en materia cultural, supone un marco próspero para este objetivo” 
        Organización de Estados Iberoamericanos</p>
      </section>

      <section id="sumate-2022" className='my-12 flex flex-col justify-around items-center '>
        <a href="https://redgestioncultural.org/" className=" flex items-center content-center w-auto ">
          <Image src={SumateGif} className="" alt='Sumate, hacé click' />
        </a>       
      </section>
       
  <section className='bg-circles'>
  <Footer></Footer>
  </section>
    </main>
    </div>
  )
}
