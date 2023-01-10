import Image from "next/image";
import { useState } from "react";

import LogoRGCP from "/public/assets/logo_blanco-RGCP.svg";
import LogoFundacion from "/public/assets/logo_blanco-fundacion.svg";

export default function Footer() {
  const [footer, setFooter] = useState(false);
  return (
    <footer className="bg-rc-black p-4 sm:p-6">
      <div className="md:flex md:justify-between">
        <div>
          <a
            href="https://redgestioncultural.org/"
            className="flex items-center"
          >
            <Image
              src={LogoRGCP}
              className="mr-3 h-12"
              alt="Red Gestión Cultural Pública"
            />
          </a>
          
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-rc-white">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
              Contactanos
            </h2>
            <ul>
              <li className="mb-4">
                <a href="/policy" className="hover:underline">
                gestionculturalpublica@gmail.com
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                +54 351 156322166
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
              Contactanos
            </h2>
            <ul>
              <li className="mb-4">
                <a href="/policy" className="hover:underline">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Términos &amp; Condiciones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
              Información
            </h2>
            <ul>
              <li className="mb-4">
                <a href="/policy" className="hover:underline">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Términos &amp; Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-rc-white sm:text-center">
          © 2023{" "}
          <a href="https://redgestioncultural.org/" className="hover:underline">
            Red de Gestión Cultural Pública
          </a>
          . Todos los derechos reservados.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-2xl">
          <a
            href="https://www.facebook.com/gestionculturalpublica/?fref=ts"
            className="text-rc-white hover:text-rc-yellow"
          >
            <span className="mdi mdi-facebook"></span>
          </a>
          <a
            href="https://www.instagram.com/red_de_gestion_cultural/"
            className="text-rc-white hover:text-rc-yellow"
          >
            <span className="mdi mdi-instagram"></span>
          </a>
          <a
            href="https://twitter.com/CulturaPublica"
            className="text-rc-white hover:text-rc-yellow"
          >
            <span className="mdi mdi-twitter"></span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCcwa-mxtUyWm36kZXYNVrQQ"
            className="text-rc-white hover:text-rc-yellow"
          >
            <span className="mdi mdi-youtube"></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
