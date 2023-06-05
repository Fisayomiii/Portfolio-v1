import '../Projects/project.css';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Project() {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const scrollrevealanimation = useAnimation();
    const scrollappearanimation = useAnimation();

    useEffect(() => {
        if (inView) {
            scrollrevealanimation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3,
                },
            });
        } else {
            scrollrevealanimation.start({
                opacity: 0,
                y: "100px",
            });
        };

        if (inView) {
            scrollappearanimation.start({
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3,
                },
            });
        } else {
            scrollappearanimation.start({
                opacity: 0,
            });
        };

        // console.log(inView);
    }, [inView]);

    const project = [
        {
            img: "http://res.cloudinary.com/fisayomithesedays/image/upload/v1682283719/samples/Portfolio/intellitools_zpjsp9.jpg",
            title: "Intellitools",
            desc: " Intellitools is a directory of Ai tools curiculated to help empower your next project",
            link: "http://intellitools.vercel.app",
        },
        {
            img: "http://res.cloudinary.com/fisayomithesedays/image/upload/v1683127938/samples/Portfolio/Clevertalk_jvwlgh.jpg",
            title: "Clevertalk",
            desc: " Clevertalk is a chatbot built allowing users to engage in conversations & get useful responses.",
            link: "http://clevertalk.netlify.app",
        },
        {
            img: "http://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/tailui_rdvkaa.jpg",
            title: "TailUI",
            desc: " TailUI a collection of Free Tailwind CSS templates to bootstrap your new projects or landing sites.",
            link: "http://tailui.vercel.app",
        },

        {
            img: "http://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/ubivid_eyp9up.jpg",
            title: "Ubivid",
            desc: " With Ubivid, users can come stream movies to maybe gain desc about a specific movie about to be released or even a movie released.",
            link: "http://ubivid.vercel.app",
        },
        {
            img: "http://res.cloudinary.com/fisayomithesedays/image/upload/v1680449035/samples/Portfolio/Screenshot_163_rbglgq.png",
            title: "Template",
            desc: " A minimal portfolio template for Techies",
            link: "http://viteportfoliotemplate.vercel.app",
        },
        {
            img: "http://res.cloudinary.com/fisayomithesedays/image/upload/v1682283718/samples/Portfolio/Travelwise_atk3n0.jpg",
            title: "Travelwise",
            desc: " Landing page ddesigned for a touring website.",
            link: "http://travelwiise.vercel.app",
        },
        {
            img: "http://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/gitlook_erof19.jpg",
            title: "GitLook",
            desc: " A nicer look at GitHub profiles built with React.js and the GitHub API.",
            link: "http://gitlook.vercel.app",
        }
    ];
    return (
        <>
            <motion.div id="home-magicwall" className="fake-magicwall" ref={ref} animate={scrollappearanimation}>
                <ul>
                    {project.map((item, index) => (
                        <motion.div ref={ref} animate={scrollrevealanimation} transition={{ staggerChildren: index * .3 }}>
                            <li key={index}>
                                <div className="magic-wall_item lazyload" id="modal1">
                                    <img src={item.img} alt="portfolio image" />
                                    <div className="colorbox">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <a href={item.link} target="_blank" rel='noreferrer' className='tag'>Demo</a>
                                    </div>
                                </div>
                            </li>
                        </motion.div>
                    ))}

                </ul>
            </motion.div >
        </>
    )
}

export default Project;
