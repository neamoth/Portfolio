import React from 'react'
import { words } from '../constant'
import Button from '../components/Button'
import ModelExperience from '../components/MyModels/ModelExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Counter from '../components/Counter'
import AnimatedHeading from '../components/AnimatedHeading'
const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out',

            },
        )
    })
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className='absolute top-0 left-0 z-10'>
                <img src='src\assets\images\bg.png' />
            </div>

            <div className='hero-layout'>
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    {/* left */}

                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>Hello,</h1>
                            <h1>I'm Neamoth</h1>
                            <AnimatedHeading
                                text={words}
                                title="Expert in"
                            />
                        </div>
                        <p className="text-white-50 md:w-[630px] w-[80dvw] md:text-xl relative z-10 pointer-events-none">
                            I'm a passionate ReactJS developer with hands-on experience in Tailwind CSS, GSAP, and ThreeJS. Skilled in client communication, problem-solving, and smooth project delivery.
                        </p>
                        < Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="DOWNLOAD CV"
                            href="https://drive.google.com/file/d/1ypQsKx8kptbs7GDHqUdvcU7JPvGi8HzO/view?usp=drive_link"
                            newTab

                        />
                    </div>

                </header>
                {/* right */}
                <figure>
                    <div className="hero-3d-layout md:pt20 xl:pt-0 pt-20">
                        <ModelExperience />
                    </div>
                </figure>
            </div>
            <Counter />
        </section>
    )
}

export default Hero