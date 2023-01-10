import Link from "next/link";
import Image from "next/image";
import LogoRGCP from "/public/assets/logo-RGCP.svg";
import logoFundacion from "/public/assets/logo-fundacion.svg";
import { useState } from "react";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full md:my-3 font-bold	">
      <div className="place-content-evenly mx-auto lg:max-w-7xl md:items-center md:flex px-4 md:px-0">
        <div>
          <div className="flex items-center justify-around py-3">
            <div>
              <a
                href="https://redgestioncultural.org/"
                className="flex items-center"
              >
                <Image
                  src={LogoRGCP}
                  alt="Red Gestión Cultural Pública"
                  className="w-48"
                />
              </a>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-rc-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-rc-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="text-rc-black items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="cursor-pointer font-bold hover:text-rc-pink hover:border-b-3">
                <Link legacyBehavior href={"/quienes-somos"}>
                  <a>Quienes somos</a>
                </Link>
              </li>
              <li className="cursor-pointer font-bold hover:text-rc-pink hover:border-b-3">
                <Link legacyBehavior href={"/ser-parte"}>
                  <a>Ser parte</a>
                </Link>
              </li>
              <li className="cursor-pointer font-bold hover:text-rc-pink hover:border-b-3">
                <Link legacyBehavior href={"/observatorio"}>
                  <a>Observatorio</a>
                </Link>
              </li>
              <li className="cursor-pointer font-bold hover:text-rc-pink hover:border-b-3">
                <Link legacyBehavior href={"/servicios"}>
                  <a>Servicios</a>
                </Link>
              </li>
              <li className="cursor-pointer font-bold hover:text-rc-pink hover:border-b-3">
                <Link legacyBehavior href={"/zona-red"}>
                  <a>#ZonaRed</a>
                </Link>
              </li>
              <li className="cursor-pointer motion-safe:hover:scale-105 underline underline-offset-8 text-rc-pink hover:text-rc-black ">
                <Link legacyBehavior href={"https://linktr.ee/redgestioncultural"}>
                  <a id="novedades">Novedades</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            src={logoFundacion}
            alt="Red Gestión Cultural Pública"
            className="w-36"
          />
        </div>
      </div>
    </nav>
  );
}
