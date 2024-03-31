import { Link } from "react-router-dom"

function Intro() {
    return (
        <div className="flex flex-row w-full justify-around box-border py-10 px-4">
            <div className="h-[450px] w-6/12 flex flex-col justify-between">
                <h1 className="text-6xl flex flex-col font-bold text-spotText">
                    <p>Hey There,</p>
                    <p className=" text-highlightedText">I'm Harikesh</p>
                </h1>
                <Link
                    to={'mailto:ranjansinhaharikesh@gmail.com'}
                    className="underline text-linkText font-bold"
                >
                    ranjansinhaharikesh@gmail.com
                </Link>
                <div className="text-2xl uppercase flex flex-row gap-2 items-center">
                    <p className="text-8xl font-bold text-spotText">&#8734;</p>
                    <div>
                        <p>Enthusiastic</p>
                        <p>Fresher</p>
                    </div>
                </div>
            </div>
            <div className="absolute">
                <img 
                    src="../../../myImageNew.png" 
                    alt="My Image" 
                    className="w-[26rem]" 
                />
            </div>
            <div className="w-80 text-xl text-spotText font-bold py-10">
                <p>I craft stunning things, and I love what I do.</p>
            </div>
        </div>
    )
}

export default Intro