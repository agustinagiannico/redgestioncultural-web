import { TwitterTimelineEmbed } from "react-twitter-embed";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>#ZonaRed - Red Gestión Cultural Pública</title>
        <meta name="description" content="Red Gestión Cultural Pública" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <main className="container mx-auto flex flex-col min-h-screen">
         <section className="z-0 p-12 md:p-10 m-10">
          <div className="flex flex-row justify-around items-center p-4 md:p-0">
            <div className="grid grid-cols-2 gap-16">
              <div className="text-rc-black selection:bg-rc-yellow">
                <h1 className="text-3xl mb-2">
                  #ZonaRed
                </h1>
                <p className="text-base mb-2">
                Este es el espacio de vinculación entre la Red y distintas propuestas culturales que integran la participación de expresiones artísticas de toda la provincia, articuladas a través del trabajo conjunto entre quienes organizan los eventos culturales y quienes integran la Red de Gestión Cultural.

Hemos impulsado la #ZONARED en Feria de Arte Córdoba, en Feria del Libro de la ciudad de Córdoba, la Noche de los Museos, el Encuentro de Gestión Cultural, etc.
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
      

        <section className="bg-circles">
          <Footer></Footer>
        </section>
      </main>
    </div>
  );
}
