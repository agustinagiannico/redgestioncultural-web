import { TwitterTimelineEmbed } from "react-twitter-embed";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SumateGif from "/public/assets/sumate-2022.gif";
import Comillas from "/public/assets/comillasLeft.svg";

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
        <div className=".carousel">
          <div id="Metodo-accion" className="bg-hands py-12 md:py-20">
            <div className="p-4 md:p-0">
              <div className="flex flex-col justify-around items-center text-left">
                <h1 className="text-3xl text-bold text-rc-white">
                  Del método a la acción{" "}
                </h1>
                <a
                  className="text-rc-yellow hover:underline text-xl font-bold"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd5BTOPf-Obe6Y9AQ-SXx_fwevTiO2xSEjzXDXH9KJ-PXQBrQ/viewform"
                >
                  <span>Relevamiento de experiencias culturales</span>
                </a>
                <p className="text-xl text-rc-white mb-5 md:mb-0">
                  ¡Pronto más novedades!
                </p>
              </div>
            </div>
          </div>
          <div id="Lab-cultural" className="bg-lights py-12 md:py-20">
            <div className="p-4 md:p-0">
              <div className="flex flex-col justify-around items-center text-left">
                <h2 className="text-3xl text-bold text-rc-white">
                  LAB Cultural participativo
                </h2>
                <p className="text-xl text-rc-white mb-5 md:mb-0">
                  Estamos trabajando en el diseño de un laboratorio ciudadano{" "}
                  <br className="hidden md:block" /> para la toma de decisiones
                  en políticas culturales.
                </p>
              </div>
            </div>
          </div>
          <div id="observatorio" className="bg-people py-12 md:py-20">
            <div className="p-4 md:p-0">
              <div className="flex flex-col justify-around items-center text-left">
                <h2 className="text-3xl text-bold text-rc-white">
                  Observatorio <br className="hidden md:block" />
                  de Gestión Cultural de Córdoba
                </h2>
                <p className="text-xl text-rc-white mb-5 md:mb-0">
                  Proyecto seleccionado por Gestionar Futuro
                  <br className="hidden md:block" /> del Ministerio de Cultural
                  de la Nación.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="z-0 p-12 md:p-10 m-10">
          <div className="flex flex-row justify-around items-center p-4 md:p-0">
            <div className="grid grid-cols-2 gap-16">
              <div className="text-base text-rc-black selection:bg-rc-yellow">
                <p className="mb-2">
                  La Red de Gestión Cultural Pública es una Red de Personas
                  <br className="hidden md:block" /> que representan distintos
                  territorios.
                </p>
                <p className="mb-2">
                  Una red de agentes que se desarrollan en el ámbito público{" "}
                  <br className="hidden md:block" />o independiente de la
                  cultura, el turismo y la educación.
                </p>
                <p className="mb-2">
                  Desde la RGCP impulsamos decisiones colectivas a los fines
                  <br className="hidden md:block" />
                  de contribuir al desarrollo de políticas culturales públicas
                  que faciliten la creación de un marco estable para que los
                  gobiernos locales puedan adoptar planes y programas en materia
                  de cultura, que fomenten el trabajo colaborativo, la reflexión{" "}
                  <br className="hidden md:block" />y la circulación de bienes y
                  servicios culturales pensados{" "}
                  <br className="hidden md:block" />
                  en clave desde desarrollo territorial.
                </p>
                <p>
                  Apelamos a la descentralización y a la profesionalización de
                  la Gestión Cultural, propiciamos el encuentro y tejemos redes
                  inter sectoriales que se sostienen en el tiempo y se
                  comprometen <br className="hidden md:block" />
                  con la transformación social.
                </p>
              </div>
              <div className="hidden md:block mx-4">
                <TwitterTimelineEmbed
                  lang="es"
                  sourceType="profile"
                  screenName="culturapublica"
                  options={{ height: 350, weight: 250 }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="z-0 p-12 md:p-10 m-10">
          <div className="flex flex-row justify-around items-center p-4 md:p-0">
            <div className="grid grid-cols-6 ">
              <div className="hidden md:block items-center">
                <Image src={Comillas} alt="comillas" className="w-36" />
              </div>
              <div className="col-start-2 col-span-4 text-center selection:bg-rc-yellow">
                <p className="text-base italic text-rc-black">
                  “Las redes culturales son instrumentos que refuerzan las
                  líneas de trabajo de interés común y apoyan al trabajo de las
                  instituciones vinculadas. Entre sus funciones, se encuentra{" "}
                  <br className="hidden md:block" /> el fortalecimiento de las
                  diversidades culturales, la promoción y defensa de los
                  derechos culturales y la promoción de espacios de concertación
                  y acción intersectorial, que sustenten el seguimiento, la
                  comunicación y la transferencia de resultados de las acciones
                  bilaterales y multilaterales. El desarrollo de las redes de
                  cooperación en materia cultural, supone un marco próspero para
                  este objetivo” <br className="hidden md:block" />
                  <span className="font-bold not-italic">
                    Organización de EstadosIberoamericanos
                  </span>
                </p>
              </div>
              <div className="hidden md:block ml-4 items-center">
                <Image
                  src={Comillas}
                  alt="comillas"
                  className="rotate-180 w-36"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="z-0 p-12 md:p-10 m-10">
          <div className="flex flex-row justify-around items-center p-4 md:p-0">

          </div>
        </section>

        <section
          id="sumate-2022"
          className="my-12 flex flex-col justify-around items-center "
        >
          <a
            href="https://redgestioncultural.org/"
            className=" flex items-center content-center w-auto "
          >
            <Image src={SumateGif} className="" alt="Sumate, hacé click" />
          </a>
        </section>
        <section className="bg-circles">
          <Footer></Footer>
        </section>
      </main>
    </div>
  );
}
