import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {

    const sectionRef = useRef(null);
    const bird = useRef(null);
    const lake = useRef(null);
    const rockautosalvage = useRef(null);

    useGSAP(() => {

        // Entrance animation for project section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animation for projects
        const projects = [bird.current, lake.current, rockautosalvage.current];
        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, [])

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* left */}
                    <div className="first-project-wrapper" ref={bird}>
                        <div className="image-wrapper ">
                            <img
                                src="/images/project1.png"
                                alt="Bird Psychology"
                                className=""
                            />
                        </div>
                        <div className="text-content">
                            <h2>Parrot training subscribtion based website for Saudi Arabia clients. </h2>
                            <p className="text-white-50 md:text-xl">Fully responsive subscribtion based website with blog,vlog & ecommerce feature's</p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={lake}>
                            <div className="image-wrapper bg-[#ffefdb] ">
                                <img
                                    src="/images/project2.png"
                                    alt="Lake Cleaning"
                                />
                                <h2>
                                    Lake Cleaning Service
                                </h2>

                            </div>
                        </div>
                        <div className="project" ref={rockautosalvage}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img
                                    src="/images/project3.png"
                                    alt="Rockautosalvage"
                                />
                                <h2>
                                    Crypto consultancy Company
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection