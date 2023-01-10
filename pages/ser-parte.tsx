import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ser parte - Red Gestión Cultural Pública</title>
        <meta name="description" content="Red Gestión Cultural Pública" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <main className="container mx-auto flex flex-col min-h-screen">
        <section className="z-0 p-12 md:p-10 m-10">
          <div className="flex flex-row justify-around items-center p-4 md:p-0">
            <div className="grid grid-cols-2 gap-16">
              <div className="text-rc-black selection:bg-rc-yellow">
                <h1 className="text-3xl mb-2">Sumate a la red</h1>
                <p className="text-base mb-2">
                  Hay condiciones indispensables para poder adherirte a la RGCP
                  y es excluyente: el compromiso con el trabajo en red, el
                  respeto y la solidaridad por el trabajo territorial que se
                  ejerce en cada localidad.
                </p>
                <p className="text-base mb-2">
                  Si perteneces a un gobierno local, instituto o agencia de
                  gobierno, podrás completar el 
                  <a
                    className="text-rc-pink bold hover:underline hover:underline-offset-2"
                    href="https://docs.google.com/forms/d/1WuWSmWOMtx1KeVkE_2EKZ6csnla2fmGSGaM-7Qqm_TA/viewform?edit_requested=true"
                  > Formulario para Instituciones Públicas </a>
                  y en el caso que seas gestora o gestor cultural independiente o
                  representas un colectivo de trabajo, una red, una Fundación,
                  ONG, etc. podrás completar el
                  <a
                    className="text-rc-pink bold hover:underline hover:underline-offset-2"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdoadlz-w3VTH88jDV64mQprTd4-rlnQ5y5gpEsMRu7SreJxQ/viewform"
                  > Formulario para Independientes</a>.
                
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
