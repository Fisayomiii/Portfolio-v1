import '../Projects/project.css';
// import { motion, Variants } from "framer-motion";

function Project() {


    // const cardVariants: Variants = {
    //     offscreen: { scale: 0.9, opacity: 0 },
    //     onscreen: {
    //         scale: 1, opacity: 1,
    //         transition: {
    //             type: "spring",
    //             bounce: 0.4,
    //             duration: 0.8,
    //             delay:1.2
    //         }
    //     }
    // };

    const project = [
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/tailui_rdvkaa.jpg",
            title: "TailUI",
            desc: "✨ TailUI a collection of Free Tailwind CSS templates to bootstrap your new projects or landing sites.",
            link: "https://tailui.vercel.app",
        },
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1682283719/samples/Portfolio/intellitools_zpjsp9.jpg",
            title: "Intellitools",
            desc: "✨ Intellitools is a database of Ai tools curiculated to help you empower your next project",
            link: "https://intellitools.vercel.app",
        },
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/ubivid_eyp9up.jpg",
            title: "Ubivid",
            desc: "✨ With Ubivid users can come stream movies to maybe gain desc about a specific movie about to be released or even a movie released.",
            link: "https://ubivid.vercel.app",
        },
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1680449035/samples/Portfolio/Screenshot_163_rbglgq.png",
            title: "Template",
            desc: "✨ A minimal portfolio template for Techies",
            link: "https://viteportfoliotemplate.vercel.app",
        },
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1682283718/samples/Portfolio/Travelwise_atk3n0.jpg",
            title: "Travelwise",
            desc: "✨ Landing page ddesigned for a touring website.",
            link: "https://travelwiise.vercel.app",
        },
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/gitlook_erof19.jpg",
            title: "GitLook",
            desc: "✨ A nicer look at GitHub profiles built with React.js and the GitHub API.",
            link: "https://gitlook.vercel.app",
        }
    ];
    return (
        <>
            <div id="home-magicwall" className="fake-magicwall">
                <ul>
                    {project.map((item, index) => (
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
                    ))}

                </ul>
            </div>
        </>
    )
}

export default Project;
