import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.png"

export default function Header() {
    return (
        <div id="container" className="fixed top-0 left-0 right-0 flex justify-between p-4">
            <Link href="/" className="w-10">
                <Image src={logo} alt="Kasa's logo"/>
            </Link>
            <Link href="/" className="w-10">
                <Image src={profile} alt="Default profile picture"/>
            </Link>
        </div>
    )
}