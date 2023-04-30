import { useIntersection } from "react-use";
import gsap from "gsap";
import { useRef } from "react";

function About() {

  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  // Animation for fading in
  const fadeIn = (element: gsap.TweenTarget) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -10,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };
  // Animation for fading out
  const fadeOut = (element: gsap.TweenTarget) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.5 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");

  return (
    <><br /><br />
      <div className="container " >
        <div className="content" >
          <div className="fake-big-1 ">About Me</div>
          <h2 aria-label="About me" className="blast-root fadeIn">
            <span className="blast" aria-hidden="true" >W</span>
            <span className="blast" aria-hidden="true" >h</span>
            <span className="blast" aria-hidden="true" >o</span>
            <span className="blast" aria-hidden="true" style={{ opacity: 0 }} >.</span><span className="blast" aria-hidden="true" >a</span>
            <span className="blast" aria-hidden="true" >m</span>
            <span className="blast" aria-hidden="true" style={{ opacity: 0 }}>.</span>
            <span className="blast" aria-hidden="true" >i</span>
            <span className="blast" aria-hidden="true" > ?</span>
          </h2>
          <p className="fadeIn">
            Hello! My name is <span className='portfolio_link'>Fisayomi</span>, and I am a <span className='portfolio_link'>Frontend developer</span> based in the vibrant city of Lagos, Nigeria. I have a passion for creating beautiful, intuitive, and user-friendly interfaces that not only look great but also provide an exceptional user experience. As a developer, I always strive to stay up-to-date with the latest technologies and trends in the industry to provide my clients with cutting-edge solutions that meet their needs.
          </p>

          <br /><br />
          <p className="fadeIn">In addition to my frontend development skills, I also have a keen interest in design and generative art. While I'm not a full-fledged generative AI artist, I love exploring the intersection of art and technology and experimenting with the creative possibilities that AI provides. I'm fascinated by the way AI can generate new and unexpected visual patterns, and I believe that this technology has the potential to revolutionize the way we think about art and creativity.</p>

          <br /><br />
          <p className="fadeIn">
            When I'm not coding or exploring the creative possibilities of AI, you can find me doing positive things either biking or movies. If you're looking for a Frontend developer who is passionate, curious, and dedicated to their craft, then look no further. I would love to work with you to create something beautiful and impactful. I always work towards achieving the best results on each project I lay my hands on. I am Interested in the development spectrum and actively looking for an opportunity in the field of Software Engineering.
          </p>

          <br /><br />
        </div>
      </div>
    </>
  )
}

export default About