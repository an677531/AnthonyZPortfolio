function Projects({ onNavigate }) {
    return (
        <section id="projects" className="hero">

            <div className="container">

                <button
                    className="project-button"
                    onClick={() => onNavigate("project-template")}
                >
                    Main Project
                </button>

                <button
                    className="project-button"
                    onClick={() => onNavigate("project-template")}
                >
                    Preserv
                </button>

                <button
                    className="project-button"
                    onClick={() => onNavigate("project-recipe-jungle")}
                >
                    Recipe Jungle
                </button>

                <button
                    className="project-button"
                    onClick={() => onNavigate("project-template")}
                >
                    MiniGov
                </button>

                <button
                    className="project-button"
                    onClick={() => onNavigate("project-template")}
                >
                    University of Central Florida
                </button>

                <button
                    className="project-button"
                    onClick={() => onNavigate("project-template")}
                >
                    Graphic Design Projects
                </button>

            </div>

        </section>
    );
}

export default Projects;