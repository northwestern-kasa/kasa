import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const currentPath = useLocation().pathname
    return (
        <div id="container" className="flex space-x-12 rounded-full navBarShadow py-3 px-16 ">
            <Link to="/"><h3 className={currentPath == "/" ? "font-bold" : ""}>Home</h3></Link>
            <Link to="/family"><h3 className={currentPath == "/family" ? "font-bold" : ""}>Family</h3></Link>
            <Link to="/events"><h3 className={currentPath == "/events" ? "font-bold" : ""}>Events</h3></Link>
            <Link to="/apply"><h3 className={currentPath == "/apply" ? "font-bold" : ""}>Apply</h3></Link>
            <Link to="/directory"><h3 className={currentPath == "/directory" ? "font-bold" : ""}>Directory</h3></Link>
            <Link to="/contact"><h3 className={currentPath == "/contact" ? "font-bold" : ""}>Contact</h3></Link>
        </div>
    )
}