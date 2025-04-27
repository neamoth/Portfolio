import AnimatedHeading from "./AnimatedHeading"
import { counterData, counterWords } from "../constant"
import CountUp from "react-countup"
const Counter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="hero-text pb-10">
                <AnimatedHeading
                    text={counterWords}
                    title="Worked with"
                />
            </div>
            <div className="mx-auto grid-4-cols">
                {counterData.map((item, index) => (
                    <div key={index} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div
                            key={index}
                            className="counter-number text-white text-5xl font-bold mb-2"
                        >
                            <CountUp
                                start={0}
                                end={item.value}
                                suffix={item.suffix}
                            />
                        </div>
                        <div className="text-white-50 text-lg ">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Counter