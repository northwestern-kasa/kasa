import NavBar from './NavBar'
import textLogo from '../../assets/text-logo.svg'
// import { useLocation } from 'react-router-dom'

export default function AlreadyApplied() {
    return (
        <section id="splash" className="h-screen flex items-center justify-center">
            {/* <NavBar/> */}
            {/* <h1 className="text-3xl">You've already applied!</h1>
            <h3 className="text-xl">Please check your email for any updates</h3> */}
            <div id="content" className=" flex items-center justify-center">
                <div id="relative-container" className="flex flex-col items-center justify-center relative">
                    <div id="header" className="flex flex-col items-center justify-center">
                        <img width={300} src={textLogo} alt="KASA's text logo"/>
                        <div className="scale-75 mt-8">
                            <NavBar />
                        </div>
                        <div id="text" className="mt-24 text-center">
                            <h1 className="text-5xl font-bold">Application already submitted</h1>
                            <h3 className="text-xl mt-2">Thanks for applying! Please check your email for updates</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}