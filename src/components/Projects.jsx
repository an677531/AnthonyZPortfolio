/*
 * PROJECTS PAGE — ACTION PLAN
 *
 * PURPOSE:
 * Create an interactive visual index of my work. The page should showcase
 * the range of my design + development abilities without overwhelming the
 * visitor. Individual projects will contain the detailed case studies.
 *
 * PROJECT STRUCTURE:
 * - Each project gets a strong visual/image
 * - Project title is always visible
 * - Short description appears on hover (desktop)
 * - Mobile should not rely on hover; description/context must remain accessible
 * - Entire project should be clickable
 * - Clicking a project leads to its individual project/case-study page
 *
 * PROJECTS:
 * 1. Main Project     → Flagship design + development project
 * 2. Preserv          → Product / UX / design + development
 * 3. Recipe Jungle    → Frontend / UI development
 * 4. MiniGov          → UX / interface / product design
 * 5. UCF              → Selected university work
 * 6. Graphic Design   → Curated visual/graphic design work
 *
 * PROJECT PAGE CONTENT:
 * Individual project pages should contain the deeper story:
 * - Overview / context
 * - Problem
 * - Goals
 * - Research / discovery
 * - User flow / information architecture
 * - Wireframes
 * - Design exploration
 * - Visual design
 * - Iterations
 * - Development (when applicable)
 * - Challenges
 * - Final result
 * - What I learned
 *
 * IMPORTANT:
 * Not every project needs to be coded. Design-focused projects can be
 * Figma prototypes/case studies, while development projects should include
 * the appropriate live demo and/or GitHub repository.
 *
 * INTERACTION / UX:
 * - Make the visuals the primary focus
 * - Use subtle, intentional hover transitions
 * - Provide keyboard focus states
 * - Ensure the experience works on mobile
 * - Do not make essential information dependent on hover
 *
 * OVERALL GOAL:
 * The Projects page should answer "What does Anthony make?"
 * The individual case studies should answer "How and why did he make it?"
 *
 * Design philosophy:
 * "Generalist by design, specialist by practice."
 */
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