import { TwitterTimelineEmbed } from "react-twitter-embed";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quienes somos - Red Gestión Cultural Pública</title>
        <meta name="description" content="Red Gestión Cultural Pública" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <main className="container mx-auto flex flex-col min-h-screen">
        <section className="z-0 p-12 md:p-10 m-10">
          <div className="flex flex-row justify-around items-center p-4 md:p-0">
            <div className="grid grid-cols-2 gap-16">
              <div className="text-rc-black selection:bg-rc-yellow">
                <h1 className="text-3xl mb-2">Quienes somos</h1>
                <p className="text-base mb-2">
                  En el año 2021, luego de 8 años ininterrumpidos de trabajo
                  colectivo, la Red de Gestión Cultural Pública se constituye
                  como Fundación Red Gestión Cultural para iniciar el camino
                  hacia la institucionalización que permite ampliar las
                  posibilidades del trabajo en red, financiar nuevos proyectos y
                  ofrecer servicios que permitan consolidarse como un espacio
                  colectivo de trabajo para impulsar la participación ciudadana
                  y de esta manera contribuir a mejorar la toma de decisiones de
                  los gobiernos en programas públicos culturales.
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
