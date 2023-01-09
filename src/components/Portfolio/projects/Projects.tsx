import '../projects/projects.css';

const project = [
    {
        img: "https://contextimages.vercel.app/images/Pri_/ubivid.jpg",
        title: "Ubivid",
        desc: "With Ubivid Users can come stream movies to maybe gain information about a specific movie about to be released or even a movie realsed.",
        link: "https://ubivid.vercel.app",
    },
    {
        img: "https://contextimages.vercel.app/images/Pri_/tailui.jpg",
        title: "TailUI",
        desc: "TailUI a collection of free Tailwind CSS components to bootstrap your new apps, projects or landing sites!",
        link: "https://tailui.vercel.app",
    },
];

const Projects = () => {
    return (
        <>
            <div id="home-magicwall" className="fake-magicwall">
                <ul>
                    {project.map((item, index) => (
                        <>
                            <li key={index}>
                                <div className="magic-wall_item lazyload" id="modal1">
                                    <img src={item.img} alt="image" />
                                    <div className="hover-content"></div>
                                    <div className="colorbox">
                                        <h3>{item.title}</h3><br />
                                        <p>{item.desc}</p>
                                        <a href={item.link} target="_blank" rel='noreferrer' className='tag'>Demo</a>
                                    </div>
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Projects;
