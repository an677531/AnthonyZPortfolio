
function TemplateProject({ onNavigate }) {
    return (
        <section className="project-page">
            <button
                className="back-button"
                onClick={() => onNavigate("projects")}
            >
                Go Back
            </button>

            <div className="container">

                {/* =========================================
                    PROJECT HERO
                ========================================== */}

                <header className="project-hero">

                    <p className="project-category">
                        Web Design · UX · Front-end Development
                    </p>

                    <h1>
                        Project Name
                    </h1>

                    <p className="project-summary">
                        A short introduction to the project. Explain what
                        the project is, what problem it addresses, and what
                        your role was.
                    </p>

                    <div className="project-hero-image">

                        <img
                            src="/projects/project-name/hero.jpg"
                            alt="Project Name preview"
                        />

                    </div>

                </header>


                {/* =========================================
                    PROJECT OVERVIEW
                ========================================== */}

                <section className="project-overview">

                    <div className="project-overview-item">

                        <h3>Role</h3>

                        <p>
                            Designer · Developer
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>Timeline</h3>

                        <p>
                            8 Weeks
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>Tools</h3>

                        <p>
                            Figma · React · CSS
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>Type</h3>

                        <p>
                            Personal Project
                        </p>

                    </div>

                </section>


                {/* =========================================
                    01 — THE PROBLEM
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        01 — The Problem
                    </p>

                    <h2>
                        What problem was I trying to solve?
                    </h2>

                    <p>
                        Describe the problem or opportunity that led to
                        the project. Explain the context and why the
                        project was worth pursuing.
                    </p>

                    <p>
                        Establish the reason the project exists before
                        introducing the solution.
                    </p>

                </section>


                {/* =========================================
                    02 — GOALS
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        02 — Goals
                    </p>

                    <h2>
                        What did I want to accomplish?
                    </h2>

                    <ul className="project-list">

                        <li>
                            Goal or requirement one
                        </li>

                        <li>
                            Goal or requirement two
                        </li>

                        <li>
                            Goal or requirement three
                        </li>

                        <li>
                            Goal or requirement four
                        </li>

                    </ul>

                </section>


                {/* =========================================
                    03 — RESEARCH & DISCOVERY
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        03 — Research & Discovery
                    </p>

                    <h2>
                        Understanding the problem
                    </h2>

                    <p>
                        Explain what you learned before designing the
                        solution. This could include user research,
                        competitive analysis, technical research,
                        stakeholder requirements, or your own
                        investigation.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/project-name/research.jpg"
                            alt="Research and discovery"
                        />

                    </div>

                </section>


                {/* =========================================
                    04 — INFORMATION ARCHITECTURE
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        04 — Structure
                    </p>

                    <h2>
                        Organizing the experience
                    </h2>

                    <p>
                        Explain how you structured the content,
                        navigation, user flow, or information
                        architecture.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/project-name/user-flow.jpg"
                            alt="User flow and information architecture"
                        />

                    </div>

                </section>


                {/* =========================================
                    05 — WIREFRAMES
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        05 — Wireframes
                    </p>

                    <h2>
                        Exploring the structure
                    </h2>

                    <p>
                        Show how the interface developed from early
                        sketches and wireframes into a more defined
                        experience.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/project-name/wireframes.jpg"
                            alt="Project wireframes"
                        />

                    </div>

                </section>


                {/* =========================================
                    06 — DESIGN
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        06 — Design
                    </p>

                    <h2>
                        Turning the structure into an interface
                    </h2>

                    <p>
                        Discuss the visual direction, typography,
                        color, layout, interaction, and information
                        hierarchy.
                    </p>

                    <div className="project-gallery">

                        <img
                            src="/projects/project-name/design-01.jpg"
                            alt="Design exploration"
                        />

                        <img
                            src="/projects/project-name/design-02.jpg"
                            alt="Interface design"
                        />

                    </div>

                </section>


                {/* =========================================
                    07 — ITERATION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        07 — Iteration
                    </p>

                    <h2>
                        Refining the experience
                    </h2>

                    <p>
                        Explain what changed during the design process
                        and, more importantly, why you made those
                        changes.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/project-name/iteration.jpg"
                            alt="Design iteration"
                        />

                    </div>

                </section>


                {/* =========================================
                    08 — DEVELOPMENT
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        08 — Development
                    </p>

                    <h2>
                        Bringing the design to life
                    </h2>

                    <p>
                        Explain how the design was implemented. Discuss
                        technical decisions, component architecture,
                        responsiveness, accessibility, performance,
                        and any interesting technical challenges.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/project-name/development.jpg"
                            alt="Project development"
                        />

                    </div>

                </section>


                {/* =========================================
                    09 — CHALLENGES
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        09 — Challenges
                    </p>

                    <h2>
                        What was difficult?
                    </h2>

                    <p>
                        Describe the most significant challenges you
                        encountered and how you approached solving them.
                    </p>

                </section>


                {/* =========================================
                    10 — FINAL RESULT
                ========================================== */}

                <section className="project-section project-result">

                    <p className="section-label">
                        10 — The Result
                    </p>

                    <h2>
                        The finished project
                    </h2>

                    <p>
                        Present the final result here. This should be
                        one of the strongest visual sections of the
                        case study.
                    </p>

                    <div className="project-image project-final-image">

                        <img
                            src="/projects/project-name/final.jpg"
                            alt="Final Project Name interface"
                        />

                    </div>

                    <div className="project-links">

                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Live Project →
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View GitHub →
                        </a>

                    </div>

                </section>


                {/* =========================================
                    11 — REFLECTION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        11 — Reflection
                    </p>

                    <h2>
                        What I learned
                    </h2>

                    <p>
                        Discuss what the project taught you about
                        design, development, problem-solving,
                        collaboration, or your own process.
                    </p>

                    <p>
                        Explain what you would change if you had
                        another opportunity to work on the project.
                    </p>

                </section>


                {/* =========================================
                    PROJECT NAVIGATION
                ========================================== */}

                <nav className="project-navigation">

                    <a href="/projects">
                        ← All Projects
                    </a>

                    <a href="/projects/next-project">
                        Next Project →
                    </a>

                </nav>

            </div>

        </section>
    );
}

export default TemplateProject;
