function Projects({ onNavigate }) {
    return (
        <section id="projects" className="hero">
            <div className="container">

                <button
                    className="project-button preserv"
                    onClick={() => onNavigate("project-preserv")}
                >
                    Preserv
                </button>

                <button
                    className="project-button recipe-jungle"
                    onClick={() => onNavigate("project-recipe-jungle")}
                >
                    Recipe Jungle
                </button>

                <button
                    className="project-button minigov"
                    onClick={() => onNavigate("project-minigov")}
                >
                    MiniGov
                </button>

                <button
                    className="project-button ucf"
                    onClick={() => onNavigate("project-UCF")}
                >
                    University of Central Florida
                </button>

                <button
                    className="project-button graphic-design"
                    onClick={() => onNavigate("project-graphic-design")}
                >
                    Graphic Design Projects
                </button>

            </div>
        </section>
    );
}

export default Projects;