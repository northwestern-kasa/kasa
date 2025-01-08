import topLeftBlob from '../../assets/blobs/top-left.svg'
import topMidLeftBlob from '../../assets/blobs/top-mid-left.svg'
import topMidRightBlob from '../../assets/blobs/top-mid-right.svg'
import topRightBlob from '../../assets/blobs/top-right.svg'
import midLeftBlob from '../../assets/blobs/mid-left.svg'
import midRightBlob from '../../assets/blobs/mid-right.svg'
import textLogo from '../../assets/text-logo.svg'
import downArrow from '../../assets/down-arrow.svg'

import NavBar from './NavBar'
import { useLocation } from 'react-router-dom'

const pageHeaders: any = {
    "/": "home",
    "/family": "Families!",
    "/events": "Our Events",
    "/apply": "Application",
    "/directory": "Directory",
    "/contact": "Contact Us",
}

export default function SplashPage() {
    const currentPath = useLocation().pathname
    const header = pageHeaders[currentPath]

    return (
        <section id="splash" className=" h-[75vh] ">
            <img src={topLeftBlob}  alt="blob" className="absolute top-0 left-0 w-[125px] h-[125px] sm:w-[200px] sm:h-[200px] md:w-[250px] lg:w-[275px] lg:h-[275px] xl:w-[325px] 2xl:w-[400px] 2xl:h-[300px]"/>
            <img src={topMidLeftBlob}  alt="blob" className="absolute top-0 left-32 w-[100px] h-[75px] sm:left-52 sm:w-[125px] sm:h-[100px] md:left-60 md:w-[175px] lg:left-72 lg:w-[250px] lg:h-[125px] xl:w-[350px] xl:h-[150px] 2xl:w-[500px] 2xl:h-[175px]"/>
            <img src={topMidRightBlob}  alt="blob" className="absolute -top-16 right-24 w-[125px] h-[150px] sm:right-40 sm:w-[150px] sm:h-[150px] md:right-44 md:w-[175px] lg:right-64 lg:w-[300px] lg:h-[150px] xl:right-80 xl:w-[350px] xl:h-[175px] 2xl:right-96 2xl:w-[450px] 2xl:h-[200px]" />
            <img src={topRightBlob}  alt="blob" className="absolute top-0 right-0 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] lg:w-[300px] lg:h-[200px] xl:h-[300px] 2xl:h-[350px] 2xl:w-[400px]"/>
            <img src={midLeftBlob}  alt="blob" className="absolute top-24 -left-5 w-[100px] h-[250px] sm:top-40 sm:w-[125px] sm:h-[250px] md:top-52 md:w-[150px] md:h-[325px] lg:w-[175px] lg:h-[400px] xl:top-64 xl:w-[200px] xl:h-[450px] 2xl:h-[450px]"/>
            <img src={midRightBlob}  alt="blob" className="absolute top-32 -right-24 w-[200px] h-[200px] sm:top-36 sm:w-[225px] sm:h-[250px] md:top-44 md:w-[225px] md:h-[325px] lg:w-[250px] lg:h-[400px] xl:top-64 xl:w-[300px] xl:h-[450px]" />
            <div id="content" className="h-full flex items-center justify-center">
                <div id="relative-container" className="flex flex-col items-center justify-center relative">
                    <div id="header" className="flex flex-col items-center justify-center space-y-8">
                        <img width={300} src={textLogo} alt="KASA's text logo" className={header == "home" ? "" : "hidden"} />
                        <h1 id="page-name" className={` ${header == 'home' ? 'hidden' : ''} text-7xl font-bold`}>{header}</h1>
                        <div className="scale-75">
                            <NavBar />
                        </div>
                    </div>
                    <div id="scroll-down" className={`
                    ${currentPath == "/" || currentPath == "/events" ? "" : "hidden"} flex flex-col space-y-2 items-center text-center absolute top-[25vh]`}>
                        <p id="learn-more" className={`${currentPath == "/" ? "" : "hidden"} w-3/4`}>Learn more about Northwestern&apos;s Korean American Student Association</p>
                        <p id="learn-more" className={`${currentPath == "/events" ? "" : "hidden"} w-3/4`}>Learn more about the different events that Northwestern KASA hosts!</p>
                        <div id="arrow-container" className="w-10 h-10 rounded-full navBarShadow flex items-center justify-center">
                            <img width={20} src={downArrow}  alt='down arrow'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}