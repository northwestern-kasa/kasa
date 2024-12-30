import { Link } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import profile from "../../assets/profile.png"

export default function Header() {
    return (
        <div id="container" className="fixed top-0 left-0 right-0 flex justify-between p-4 z-10">
            <Link to="/" className="w-10">
                <img src={logo} alt="Kasa's logo"/>
            </Link>
            <Link to="/login" className="w-10">
                <img src={profile} alt="Default profile picture"/>
            </Link>
        </div>
    )
}