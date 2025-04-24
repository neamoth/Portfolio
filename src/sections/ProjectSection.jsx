const ProjectSection = () => {
    return (
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* left */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper ">
                            <img
                                src="/src/assets/images/project1.png"
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
                        <div className="project">
                            <div className="image-wrapper bg-[#ffefdb] ">
                                <img
                                    src="src/assets/images/project2.png"
                                    alt="Lake Cleaning"
                                />
                                <h2>
                                    Lake Cleaning Service
                                </h2>

                            </div>
                        </div>
                        <div className="project">
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img
                                    src="src/assets/images/project3.png"
                                    alt="Rockautosalvage"
                                />
                                <h2>
                                    AutoParts Leads Generation
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