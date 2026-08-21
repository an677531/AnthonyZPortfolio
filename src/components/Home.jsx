import { useState } from "react";
import heroImage from "../assets/anthony.png"

function Home() {

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
        <section id="home" className="home">
            <div className="home-hero">
                <div className="home-hero-content">
                    <h1>
                        Hi, I’m <strong className="accentA">Anthony.</strong><br />I’m a <strong className="accentA">Front-End</strong><br /><strong className="accentA">Developer</strong> and<br /><strong className="accentA">Designer</strong>
                    </h1>
                </div>
                <div className="home-positioning">
                    <p>
                        A <strong>generalist</strong> by design,<strong> specialist</strong> by practice.
                    </p>
                </div>
                <div className="home-portrait">
                    <img
                        src={heroImage}
                        alt="Anthony"
                    />
                </div>
            </div>

            <div className="home-grid">

                <article className="home-card approach-card">

                    <p className="accentBD">
                        Approach
                    </p>

                    <p className="approach-text">
                        The <strong className="accentB">best solutions</strong> rarely stay
                        in one lane - they exist{" "}
                        <strong className="accentB">where disciplines intersect.</strong>
                    </p>

                </article>

                <div
                    className="home-card skills-card"
                    aria-labelledby="skills-heading"
                >

                    <div className="skills-header">

                        <p className="accentBD">
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


                <div className="home-card featured-project-card">

                    <div className="featured-project-header">

                        <div>
                            <p className="card-label">
                                Featured Project
                            </p>
                        </div>
                    </div>

                    <div className="featured-project-image">
                        <iframe
                            src="https://preserv-one.vercel.app/"
                            title="Pantry Management System"
                            loading="lazy"
                        />
                    </div>


                    <div className="featured-project-description">
                        <p>Preserv</p>
                        <a href="#projects">View Project →</a>
                    </div>
                </div>
                <article className="home-card recipe-project-card">

                    <div className="featured-project-header">

                        <div>
                            <p className="card-label">
                                Featured Project
                            </p>
                        </div>
                    </div>


                    <div className="recipe-preview">

                        <iframe
                            src="https://recipe-jungle.vercel.app/"
                            title="Recipe Jungle live preview"
                            loading="lazy"
                        />

                    </div>
                    <p>Recipe Jungle</p>
                    <a href="#projects">
                        View Project →
                    </a>

                </article>


            </div>

        </section>
    );
}

export default Home;