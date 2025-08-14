import { Images } from "@/assets";
import { useEffect, useState } from "react";
import Button from "../ui/Button ";
import { Link } from "react-router";

const FeaturedProjects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateNext, setAnimateNext] = useState(false);

    const nextIndex = (activeIndex + 1) % project.length;
    const nextNextIndex = (nextIndex + 1) % project.length;

    // Animation and auto-switch
    useEffect(() => {
        const animateTimeout = setTimeout(() => {
            setAnimateNext(true); // trigger animation at 5s
        }, 5500);

        const switchTimeout = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % project.length); // switch project at 6s
            setAnimateNext(false); // reset animation
        }, 6000);

        return () => {
            clearTimeout(animateTimeout);
            clearTimeout(switchTimeout);
        };
    }, [activeIndex]);

    const handleProjectClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="bg-black relative overflow-hidden py-24 text-white">
            <h2 className="text-3xl lg:text-[40px] font-light text-center font-space mb-2 lg:mb-6">
                Spotlight on Creativity
            </h2>
            <p className="text-center leading-6 mb-14 text-sm text-gray-300">
                Discover fresh ideas and innovative projects.
            </p>
            {/* mobiile animation section */}
            <div className="md:hidden">
                <div className="relative overflow-hidden h-130">
                    <div className={`${animateNext ? "slideOutLeft" : ""} top-0 absolute`}>
                        <div
                            style={{
                                backgroundImage: `url(${project[activeIndex].image})`,
                            }}
                            className="bg-cover h-60 bg-center"
                        />

                        <div className="flex flex-col px-minipad justify-between gap-14 py-10">
                            <div>
                                <p className="text-white mb-2"> Featured Project</p>
                                <h2 className="text-4xl font-semibold mb-2">
                                    {project[activeIndex].name}
                                </h2>
                                <p>{project[activeIndex].description}</p>
                            </div>
                            <div>
                                <Link to="/">
                                    <Button>Read More</Button>
                                </Link>
                            </div>
                        </div>


                    </div>
                    <div className={`${animateNext ? "slideInRight" : ""} opacity-0 top-0 absolute`}>
                        <div
                            style={{
                                backgroundImage: `url(${project[nextIndex].image})`,
                            }}
                            className="bg-cover h-60 bg-center"
                        />

                        <div className="flex flex-col px-minipad justify-between gap-14 py-10">
                            <div>
                                <p className="text-white mb-2"> Featured Project</p>
                                <h2 className="text-4xl font-semibold mb-2">
                                    {project[nextIndex].name}
                                </h2>
                                <p>{project[nextIndex].description}</p>
                            </div>
                            <div>
                                <Link to="/">
                                    <Button>Read More</Button>
                                </Link>
                            </div>
                        </div>


                    </div>



                </div>



                <div className="flex px-minipad w-full mt-4 gap-2">
                    {project.map((_, index) => (


                        <div className={`${activeIndex === index ? "w-full" : "w-12"
                            } mt-4  outline outline-white/20 grid rounded-full h-[0.25px]`}>
                            <div
                                className={`${activeIndex === index ? "loading" : ""
                                    } bg-white w-0 rounded-full`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* desktop animated project section */}
            <div className="hidden md:block px-minipad lg:px-pad">
                <div className="flex items-end">
                    <div className="grid grid-cols-2 h-80 lg:h-100 gap-6">
                        <div className="flex flex-col justify-between gap-4 px-6 py-10">
                            <div>
                                <h2 className="text-4xl font-semibold mb-2">
                                    {project[activeIndex].name}
                                </h2>
                                <p >{project[activeIndex].description}</p>
                            </div>
                            <div>
                                <Link to="/">
                                    <Button>Read More</Button>
                                </Link>
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundImage: `url(${project[activeIndex].image})`,
                            }}
                            className="bg-cover bg-center"
                        />
                    </div>

                    <div className="w-60">
                        <div className="grid gap-1 px-2 mb-2">
                            <p className="text-xs">Up Next</p>
                            <p>{project[nextIndex].name}</p>
                        </div>

                        <div className="h-40 w-full relative isolate">
                            <img
                                className={`${animateNext ? "scaleup" : ""} h-40 w-full object-cover`}
                                src={project[nextIndex].image}
                                alt=""
                            />
                            <img
                                className={`h-40 absolute top-0 left-0 -z-20 w-full object-cover`}
                                src={project[nextNextIndex].image}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 px-8 mt-6 gap-8">
                    {project.map((item, index) => (
                        <div
                            onClick={() => {
                                handleProjectClick(index);
                            }}
                            key={index}
                            className="grid gap-2"
                        >
                            <p className="text-xl opacity-70">{item.name}</p>
                            <p className="text-sm lg:text-base">{item.description}</p>
                            <div className="w-full mt-4 grid rounded-full h-[1px]">
                                <div
                                    className={`${activeIndex === index ? "loading" : ""
                                        } bg-white w-0 rounded-full`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;

const project = [
    {
        id: 1,
        name: "Campus Something",
        description:
            "Campus crib is an online platform for students to find available hostel around their school area",
        github: "githublink.com",
        liveurl: "liveurlhere.com",
        image: Images.Programmer,
    },
    {
        id: 2,
        name: "Campus Whatever",
        description:
            "Campus crib is an online platform for students to find available hostel around their school area",
        github: "githublink.com",
        liveurl: "liveurlhere.com",
        image: Images.Tech,
    },
    {
        id: 3,
        name: "Campus Crib",
        description:
            "Campus crib is an online platform for students to find available hostel around their school area",
        github: "githublink.com",
        liveurl: "liveurlhere.com",
        image: Images.Loginbg,
    },
    {
        id: 4,
        name: "Campus Home",
        description:
            "Campus crib is an online platform for students to find available hostel around their school area",
        github: "githublink.com",
        liveurl: "liveurlhere.com",
        image: Images.Loginbg2,
    },
];
