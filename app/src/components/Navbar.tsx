import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const currentPath = usePathname()
    return (
        <div id="container" className="flex space-x-12 rounded-full navBarShadow py-3 px-16 ">
            <Link href="/"><h3 className={currentPath == "/" ? "font-bold" : ""}>Home</h3></Link>
            <Link href="/family"><h3 className={currentPath == "/family" ? "font-bold" : ""}>Family</h3></Link>
            <Link href="/events"><h3 className={currentPath == "/events" ? "font-bold" : ""}>Events</h3></Link>
            <Link href="/apply"><h3 className={currentPath == "/apply" ? "font-bold" : ""}>Apply</h3></Link>
            <Link href="/directory"><h3 className={currentPath == "/directory" ? "font-bold" : ""}>Directory</h3></Link>
            <Link href="/contact"><h3 className={currentPath == "/contact" ? "font-bold" : ""}>Contact</h3></Link>
        </div>
    )
}