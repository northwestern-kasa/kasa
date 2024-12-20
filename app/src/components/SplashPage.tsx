import topLeftBlob from '../../assets/blobs/top-left.svg'
import topMidLeftBlob from '../../assets/blobs/top-mid-left.svg'
import topMidRightBlob from '../../assets/blobs/top-mid-right.svg'
import topRightBlob from '../../assets/blobs/top-right.svg'
import midLeftBlob from '../../assets/blobs/mid-left.svg'
import midRightBlob from '../../assets/blobs/mid-right.svg'
import textLogo from '../../assets/text-logo.png'
import downArrow from '../../assets/down-arrow.svg'
import Image from 'next/image'

import NavBar from './Navbar'
import { usePathname } from 'next/navigation'

const pageHeaders: any = {
    "/": "home",
    "/family": "Families!",
    "/events": "Our Events",
    "/apply": "Applications",
    "/contact": "Contact Us",
}

export default function SplashPage() {
    const currentPath = usePathname()
    const header = pageHeaders[currentPath]

    return (
        <section id="splash" className=" h-[75vh] ">
            <Image src={topLeftBlob} unoptimized={true} alt="blob" className="absolute top-0 left-0"/>
            <Image src={topMidLeftBlob} unoptimized={true} alt="blob" className="absolute top-0 left-1/4"/>
            <Image src={topMidRightBlob} unoptimized={true} alt="blob" className="absolute top-0 right-1/4"/>
            <Image src={topRightBlob} unoptimized={true} alt="blob" className="absolute top-0 right-0"/>
            <Image src={midLeftBlob} unoptimized={true} alt="blob" className="absolute top-1/4 left-0"/>
            <Image src={midRightBlob} unoptimized={true} alt="blob" className="absolute top-1/4 right-0" />
            <div id="content" className="h-full flex items-center justify-center">
                <div id="relative-container" className="flex flex-col items-center justify-center relative">
                    <div id="header" className="flex flex-col items-center justify-center space-y-8">
                        <Image width={300} src={textLogo} alt="KASA's text logo" className={header == "home" ? "" : "hidden"} />
                        <h1 id="page-name" className={` ${header == 'home' ? 'hidden' : ''} text-7xl font-bold`}>{header}</h1>
                        <NavBar/>
                    </div>
                    <div id="scroll-down" className={`
                    ${currentPath == "/" || currentPath == "/events" ? "" : "hidden"} flex flex-col space-y-2 items-center text-center absolute top-[25vh]`}>
                        <p id="learn-more" className={`${currentPath == "/" ? "" : "hidden"} w-3/4`}>Learn more about Northwestern&apos;s Korean American Student Association</p>
                        <p id="learn-more" className={`${currentPath == "/events" ? "" : "hidden"} w-3/4`}>Learn more about the different events that Northwestern KASA hosts!</p>
                        <div id="arrow-container" className="w-10 h-10 rounded-full navBarShadow flex items-center justify-center">
                            <Image width={20} src={downArrow} unoptimized={true} alt='down arrow'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}