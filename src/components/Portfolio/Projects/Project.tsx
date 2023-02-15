import '../Projects/project.css'

function Project() {
    const project = [
        {
            img: "https://i.ibb.co/3WQhSKF/ubivid.jpg",
            title: "Ubivid",
            desc: "✨ With Ubivid users can come stream movies to maybe gain desc about a specific movie about to be released or even a movie released.",
            link: "https://ubivid.vercel.app",
        },
        {
            img: "https://i.ibb.co/k8Q6Tw7/tailui.jpg",
            title: "TailUI",
            desc: "✨ TailUI a collection of Free Tailwind CSS templates to bootstrap your new projects or landing sites.",
            link: "https://tailui.vercel.app",
        },
        {
            img: "https://i.ibb.co/DbY8VPL/earlybean.jpg",
            title: "EarlyBean",
            // desc: "✨ EarlyBean is a web application that help children save money better.",
            link: "https://earlybean.vercel.app",
        },
        {
            img: "https://i.ibb.co/YW3SRjS/gitlook.jpg",
            title: "GitLook",
            desc: "✨ A nicer look at GitHub profiles built with React.js and the GitHub API.",
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