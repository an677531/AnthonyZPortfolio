function Home() {

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="grid-item-intro">
                    <p>Hi, I'm <strong>Anthony</strong>. I'm a <strong>Front-End Developer</strong> and <strong>Designer</strong></p>
                    <p>A<strong> generalist</strong> by design, <strong>specialist</strong> by practice.</p>

                    <p>Honed fluency across <strong>visual design</strong> and <strong>front-end development</strong> supported by background in CAD and 3D modeling.</p>

                    <p>The <strong>best solutions</strong> rarely stay in one lane - they exist <strong>where disciplines</strong> intersect.</p>
                </div>

            </div>
            <div className="desktop-iframe">
                <iframe src="https://recipe-jungle.vercel.app/"></iframe>
            </div>
            <section className="about-skills" aria-labelledby="skills-heading">

                <h2 id="skills-heading" className="about-section-title">
                    Skills
                </h2>

                <div className="skill-groups">

                    <div className="skill-group">
                        <h3 className="skill-group-label">
                            Frontend Development
                        </h3>

                        <ul className="skill-pills">
                            <li className="skill-pill">HTML5</li>
                            <li className="skill-pill">CSS3</li>
                            <li className="skill-pill">JavaScript</li>
                            <li className="skill-pill">React</li>
                            <li className="skill-pill">WordPress</li>
                            <li className="skill-pill">PHP</li>
                        </ul>
                    </div>

                    <div className="skill-group">
                        <h3 className="skill-group-label">
                            UI / UX
                        </h3>

                        <ul className="skill-pills">
                            <li className="skill-pill">UI Design</li>
                            <li className="skill-pill">UX Design</li>
                            <li className="skill-pill">Responsive Design</li>
                            <li className="skill-pill">Wireframing</li>
                            <li className="skill-pill">Prototyping</li>
                            <li className="skill-pill">Figma</li>
                        </ul>
                    </div>

                    <div className="skill-group">
                        <h3 className="skill-group-label">
                            Visual Design
                        </h3>

                        <ul className="skill-pills">
                            <li className="skill-pill">Graphic Design</li>
                            <li className="skill-pill">Illustration</li>
                            <li className="skill-pill">Branding</li>
                            <li className="skill-pill">Adobe Creative Suite</li>
                        </ul>
                    </div>

                    <div className="skill-group">
                        <h3 className="skill-group-label">
                            3D / Technical
                        </h3>

                        <ul className="skill-pills">
                            <li className="skill-pill">3D Modeling</li>
                            <li className="skill-pill">CAD</li>
                            <li className="skill-pill">Maya</li>
                            <li className="skill-pill">AutoCAD</li>
                            <li className="skill-pill">Revit</li>
                            <li className="skill-pill">Fusion 360</li>
                        </ul>
                    </div>

                </div>

            </section>
        </section>
    );
}

export default Home;