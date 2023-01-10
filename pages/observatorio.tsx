import { TwitterTimelineEmbed } from "react-twitter-embed";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Observatorio - Red Gestión Cultural Pública</title>
        <meta name="description" content="Red Gestión Cultural Pública" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <main className="container mx-auto flex flex-col min-h-screen">
        
        <section className="bg-circles">
          <Footer></Footer>
        </section>
      </main>
    </div>
  );
}
