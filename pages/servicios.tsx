import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Servicios - Red Gestión Cultural Pública</title>
        <meta name="description" content="Red Gestión Cultural Pública" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <main className="container mx-auto flex flex-col min-h-screen">
        <section className="z-0 p-12 md:p-10 m-10">
          <div className="flex flex-row justify-around items-center p-4 md:p-0">
            <div className="grid grid-cols-2 gap-16">
              <div className="text-rc-black selection:bg-rc-yellow">
                <h1 className="text-3xl mb-2">Servicios</h1>
                <p className="text-base mb-2">
                  La principal tarea de la Fundación es la articulación entre
                  gobiernos, profesionales independientes de la gestión cultural
                  con personas trabajadoras y emprendedoras de la cultura.
                </p>
                <p className="text-base mb-2">
                  Los principales ejes de acción son:
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-around items-center p-4 md:p-0 my-10">
            <div className="grid grid-cols-3 gap-12">
              <div className="text-rc-black text-center selection:bg-rc-yellow">
                <h2 className="text-2xl mb-2 text-rc-pink">Formación</h2>
                <p className="text-sm">
                  La RGCP tiene la firme convicción de que la formación en
                  Gestión Cultural es vital para la profesionalización del
                  sector siempre respetando el oficio del trabajo de la cultura,
                  aportando herramientas que contribuyan a la mejora de la
                  articulación de los sectores protagonistas de la toma de
                  decisiones en políticas culturales participativas.
                </p>
              </div>
              <div className="text-rc-black text-center selection:bg-rc-yellow">
              <h2 className="text-2xl mb-2 text-rc-pink">Asesoramiento</h2>
                <p className="text-sm">
                  Acompañamos procesos de asesoramiento en distintos proyectos
                  culturales. Sea con tutorías específicas para el sector
                  independiente como diseño de Programas Culturales para estados
                  y para empresas que entienden que la cultura es transformadora
                  de entornos y a través de proyectos que integren lo artístico
                  y la comunidad, impulsan el cambio en sus territorios.
                </p>
              </div>
              <div className="text-rc-black text-center selection:bg-rc-yellow">
              <h2 className="text-2xl mb-2 text-rc-pink">Cooperación</h2>
                <p className="text-sm">
                  El trabajo en Red es impulsado a través de múltiples programas
                  de cooperación regional, nacional e internacional. Desde la
                  RGCP participamos de distintos espacios y presentamos
                  proyectos en organismos internacionales. Hemos sido
                  beneficiadas con el aporte de Iberescena, del Fondo Suizo para
                  la cultura Pro Helvetia y la Carta de Ciudades presentada en
                  2019 contó con el aval de UNESCO, de UIM, de Mercociudades,
                  etc.
                </p>
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
