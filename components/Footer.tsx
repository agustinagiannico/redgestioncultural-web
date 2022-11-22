import Image from "next/image";
import LogoRGCP from '/public/assets/logo_blanco-RGCP.svg'
import { useState } from 'react';

export default function Footer() {
    const [footer, setFooter] = useState(false)
    return (
        <footer className="bg-rc-black p-4 sm:p-6">
            <div className="md:flex md:justify-between">
                <div>
                    <a href="https://redgestioncultural.org/" className="flex items-center">
                        <Image src={LogoRGCP} className="mr-3 h-12" alt='Red Gestión Cultural Pública' />
                    </a>
                    
                </div>
                
            <div className="sm:flex sm:items-center sm:justify-between">
    
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-3xl">
                    <a href="https://www.facebook.com/gestionculturalpublica/?fref=ts" className="text-rc-white hover:text-rc-yellow">
                        <span className="mdi mdi-facebook"></span>
                    </a>
                    <a href="https://www.instagram.com/red_de_gestion_cultural/" className="text-rc-white hover:text-rc-yellow">
                        <span className="mdi mdi-instagram"></span>
                    </a>
                    <a href="https://twitter.com/CulturaPublica" className="text-rc-white hover:text-rc-yellow">
                        <span className="mdi mdi-twitter"></span>
                    </a>
                    <a href="https://www.youtube.com/channel/UCcwa-mxtUyWm36kZXYNVrQQ" className="text-rc-white hover:text-rc-yellow">
                        <span className="mdi mdi-youtube"></span>
                    </a>
                </div>
                
            
            </div>
            </div>
        </footer>
    
    )
}