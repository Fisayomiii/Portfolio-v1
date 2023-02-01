import '../Projects/project.css'

function Project() {

    const project = [
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/ubivid_eyp9up.jpg",
            title: "Ubivid",
            desc: "✨ With Ubivid Users can come stream movies to gain information about a specific movie about to be released or even a movie released.",
            link: "https://ubivid.vercel.app",
        },
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/tailui_rdvkaa.jpg",
            title: "TailUI",
            desc: "✨ TailUI a collection of Free Tailwind CSS components to bootstrap your new apps, projects or landing sites!",
            link: "https://tailui.vercel.app",
        },
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/earlybean_sfyckt.jpg",
            title: "EarlyBean",
            desc: "✨ EarlyBean is a web application that help children save money better.",
            link: "https://earlybean.vercel.app",
        },
        {
            img: "https://res.cloudinary.com/fisayomithesedays/image/upload/v1675264262/samples/Portfolio/gitlook_erof19.jpg",
            title: "GitLook",
            desc: "✨ A nicer look at GitHub profiles built with React.js and the GitHub API",
            link: "https://gitlook.vercel.app",
        },
    ];
    return (
        <>
            {/* <div id="home-magicwall" className="fake-magicwall ">
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
            </div> */}

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

export default Project
