import instagram from '../../assets/socials/instagram.png'
import facebook from '../../assets/socials/facebook.png'
import youtube from '../../assets/socials/youtube.png'
import tiktok from '../../assets/socials/tiktok.png'
import textLogo from '../../assets/text-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
        const currentPath = usePathname()
    return (
        <div id="container" className="w-full flex flex-col items-center pt-8 border-t border-gray-400">
            <Image id="logo" className='mb-6 sm:mb-12' src={textLogo} alt="Kasa's text logo" />
            <div id="nav" className="flex flex-col items-center space-between mb-8 gap-8 sm:flex-row sm:gap-12 sm:mb-12">
                <Link href="/"><h6 className={currentPath == "/" ? "font-bold" : ""}>Home</h6></Link>
                <Link href="/family"><h6 className={currentPath == "/family" ? "font-bold" : ""}>Family</h6></Link>
                <Link href="/events"><h6 className={currentPath == "/events" ? "font-bold" : ""}>Events</h6></Link>
                <Link href="/application"><h6 className={currentPath == "/application" ? "font-bold" : ""}>Application</h6></Link>
                <Link href="/directory"><h6 className={currentPath == "/directory" ? "font-bold" : ""}>Directory</h6></Link>
                <Link href="/contact"><h6 className={currentPath == "/contact" ? "font-bold" : ""}>Contact Us</h6></Link>
            </div>
            <h6 id="cta" className="font-bold mb-4 hidden sm:block">Stay in touch</h6>
            <div id="socials" className="flex flex-row mb-8 space-x-8">
                <Image src={instagram} alt="Instagram logo"/>
                <Image src={facebook} alt="Facebook logo"/>
                <Image src={youtube} alt="Youtube logo"/>
                <Image src={tiktok} alt="Tiktok logo"/>
            </div>
            <div id="copyright" className="text-gray-400 mb-4">©northwesternkasa</div>
        </div>
        
    )

}