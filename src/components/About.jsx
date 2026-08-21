import Photos from './Photos.jsx';
import InstagramPost from "./Insta.jsx";
import { useState } from "react";
function About() {
    const [skillFilter, setSkillFilter] = useState("all");

    const skills = [
        { name: "HTML 5", type: "developer" },
        { name: "WordPress", type: "developer" },
        { name: "CSS", type: "developer" },
        { name: "Responsive Design", type: "developer" },
        { name: "React", type: "developer" },
        { name: "JavaScript", type: "developer" },
        { name: "PHP", type: "developer" },

        { name: "Adobe Creative Suite", type: "designer" },
        { name: "Prototyping", type: "designer" },
        { name: "Figma", type: "designer" },
        { name: "UI/UX Design", type: "designer" },
        { name: "AutoCAD", type: "designer" },
        { name: "Illustration", type: "designer" },
        { name: "Graphic Design", type: "designer" },
        { name: "Branding", type: "designer" },
        { name: "3D Modeling", type: "designer" },
        { name: "CAD", type: "designer" },
        { name: "Maya", type: "designer" },
        { name: "Fusion 360", type: "designer" }
    ];
    return (
        <section id="about" className="hero">
            <div className="container">

                <div className="intro">
                    <h1 className="bio-title">
                        Who I am
                    </h1>

                    <div className="bio-content">
                        <span className="accentAD">Where I'm From</span>
                        <p>I'm from Florida, where I studied Digital Media at the University of Central Florida. I've always liked making things: designing, coding, drawing, or occasionally taking something apart just to see how it works (no promises it goes back together).</p>

                        <span className="accentBD">What I Do</span>
                        <p>I work across front-end development, visual design, and digital media. At UCF, I built and maintained production WordPress sites as a Web Designer and worked on campus marketing as a Graphic Design Assistant.</p>

                        <p>My toolkit includes HTML, CSS, JavaScript, React, and WordPress, along with a mix of other creative and technical tools. I've also done some 3D modeling, CAD, and architectural visualization along the way. I like sitting at the intersection of design and code, building things that work well and feel good to use.</p>
                        <span className="accentAD">What I'm Into</span>
                        <p>Outside of websites, I'm usually making something else. I draw, write and illustrate fantasy worlds, play games, read, watch movies, cook, keep more plants than I probably should, and take things apart just to understand them. I'm curious by nature about software, recipes, fictional worlds, or whatever's sitting on my desk that day.</p>
                        <span className="accentBD">What I'm Looking For</span>
                        <p>Work where design, technology, and creativity overlap, with people who care about building thoughtful things and are willing to experiment. Somewhere I can keep making, keep learning, and keep taking things apart to put them back together better.</p>
                    </div>

                </div>
                <div className="personal-links">
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7467206019664891905?collapsed=1" height="629" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <div className="about-photos">
                    <Photos />
                </div>
                <div className="about-skills-card">

                    <div className="skills-header">

                        <p id="skills-heading">
                            Skills
                        </p>

                        <div
                            className="skill-filters"
                            role="group"
                            aria-label="Filter skills"
                        >

                            <button
                                type="button"
                                className={
                                    skillFilter === "designer"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setSkillFilter("designer")
                                }
                            >
                                Designer
                            </button>

                            <button
                                type="button"
                                className={
                                    skillFilter === "developer"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setSkillFilter("developer")
                                }
                            >
                                Developer
                            </button>

                            <button
                                type="button"
                                className={
                                    skillFilter === "all"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setSkillFilter("all")
                                }
                            >
                                All In
                            </button>

                        </div>

                    </div>


                    <div className="skill-pills">

                        {skills.map((skill) => {

                            const isHighlighted =
                                skillFilter === "all" ||
                                skillFilter === skill.type;

                            return (
                                <span
                                    className={`skill-pill ${skill.type} ${isHighlighted ? "highlighted" : "muted"
                                        }`}
                                    key={skill.name}
                                >
                                    {skill.name}
                                </span>
                            );

                        })}

                    </div>

                </div>
                <div className="spotify">
                    <span className="accentB"><strong><p>Music I Listen to On Repeat</p></strong></span>
                    <iframe src="https://open.spotify.com/embed/playlist/2vHEICNnkB3kioFgdaRzzA?utm_source=generator&theme=0&si=8c724779f05d4b46" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="instagram">
                    <InstagramPost />
                </div>
                <div className="current-project">
                    <span className="accentB"><strong><p>My Current Side-Project</p></strong></span>
                    <p>Board game collection manager.</p>
                    <p>Checkout my work progress <a className="reg-link" href="https://github.com/an677531">here</a></p>
                </div>

            </div>
        </section>
    );
}

export default About;