function RecipeJungle({ onNavigate }) {
    return (
        <section className="project-page">

            <button
                className="back-button"
                onClick={() => onNavigate("projects")}
            >
                ← Back to Projects
            </button>

            <div className="container">

                {/* =========================================
                    PROJECT HERO
                ========================================== */}

                <header className="project-hero">

                    <p className="project-category">
                        Web Design · UX · React Development
                    </p>

                    <h1>
                        Recipe Jungle
                    </h1>

                    <p className="project-summary">
                        A personal recipe platform designed to make
                        browsing, saving, and customizing recipes simple
                        without requiring an account.
                    </p>

                    <div className="desktop-iframe">

                        <iframe
                            src="https://recipe-jungle.vercel.app/"
                            title="Recipe Jungle live demo"
                            loading="lazy"
                        />

                    </div>

                </header>


                {/* =========================================
                    PROJECT OVERVIEW
                ========================================== */}

                <section className="project-overview">

                    <div className="project-overview-item">
                        <h3>Role</h3>
                        <p>Designer · Developer</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Timeline</h3>
                        <p>Academic Project</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Tools</h3>
                        <p>React · Vite · Supabase · CSS</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Type</h3>
                        <p>Personal Recipe Platform</p>
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
                        Recipe sites often make a simple task feel complicated.
                    </h2>

                    <p>
                        I wanted to create a recipe platform that made
                        discovering and using recipes straightforward
                        without requiring users to create an account.
                    </p>

                    <p>
                        At the same time, I wanted users to have control
                        over how they interacted with the site. Layout
                        preferences, font sizing, color modes, and saved
                        recipes needed to persist between sessions.
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
                        Build a recipe experience around flexibility.
                    </h2>

                    <ul className="project-list">

                        <li>
                            Make recipes easy to discover and browse.
                        </li>

                        <li>
                            Allow users to save recipes without creating
                            an account.
                        </li>

                        <li>
                            Give users control over layout and visual
                            preferences.
                        </li>

                        <li>
                            Create a responsive experience that works
                            across devices.
                        </li>

                        <li>
                            Build a secure administrative system for
                            managing recipes.
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
                        Designing around real usage rather than a fixed interface.
                    </h2>

                    <p>
                        I approached the project by considering how people
                        actually interact with recipe sites. Some users
                        want to quickly scan a collection of recipes,
                        while others need a more focused reading experience
                        once they choose one.
                    </p>

                    <p>
                        This led to a system that supports multiple browsing
                        layouts, cuisine filtering, keyword search, saved
                        recipes, and customizable visual preferences.
                    </p>

                </section>


                {/* =========================================
                    04 — STRUCTURE
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        04 — Structure
                    </p>

                    <h2>
                        Separating pages, reusable components, and application state.
                    </h2>

                    <p>
                        The application is organized around reusable React
                        components, dedicated page views, and context
                        providers for application-wide state.
                    </p>

                    <p>
                        Public routes handle browsing and recipe viewing,
                        while protected dashboard routes handle recipe
                        management.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/recipe-jungle/architecture.jpg"
                            alt="Recipe Jungle application structure"
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
                        Establishing the browsing experience before implementation.
                    </h2>

                    <p>
                        Early planning focused on the relationship between
                        recipe discovery, filtering, recipe cards, and the
                        full recipe view.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/recipe-jungle/wireframes.jpg"
                            alt="Recipe Jungle wireframes"
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
                        A visual system built around warmth and readability.
                    </h2>

                    <p>
                        I developed a custom visual system rather than
                        relying on a CSS framework. The interface uses
                        a warm neutral background with tomato red and
                        tropical teal as primary accents.
                    </p>

                    <p>
                        Typography combines Noto Serif Display and Libre
                        Bodoni with Fira Sans, Hind Vadodara, and Inter
                        to create separation between editorial content
                        and interface controls.
                    </p>

                    <div className="project-gallery">

                        <img
                            src="/projects/recipe-jungle/design-01.jpg"
                            alt="Recipe Jungle visual design"
                        />

                        <img
                            src="/projects/recipe-jungle/design-02.jpg"
                            alt="Recipe Jungle interface design"
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
                        Building the project in small, testable steps.
                    </h2>

                    <p>
                        One of the biggest changes to my development process
                        during this project was breaking implementation into
                        smaller steps. I could build a feature, test it,
                        resolve errors, and then move to the next part of
                        the application.
                    </p>

                    <p>
                        This approach made it easier to work across multiple
                        sessions while keeping the project stable as new
                        features were added.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/recipe-jungle/iteration.jpg"
                            alt="Recipe Jungle development iterations"
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
                        React on the frontend, Supabase behind it.
                    </h2>

                    <p>
                        Recipe Jungle was built with React 19 and Vite
                        using custom CSS rather than a component framework.
                        React Router handles navigation between public
                        and protected views.
                    </p>

                    <p>
                        Supabase provides both the PostgreSQL database and
                        authentication. The browser communicates directly
                        with Supabase through its JavaScript client, while
                        Row Level Security controls write access to the
                        recipe database.
                    </p>

                    <p>
                        Application state is separated into contexts for
                        authentication, favorites, and user preferences.
                        Favorites and interface preferences are stored
                        locally so they persist between sessions.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/recipe-jungle/development.jpg"
                            alt="Recipe Jungle React development"
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
                        Balancing flexibility with a simple interface.
                    </h2>

                    <p>
                        One challenge was supporting multiple user
                        preferences without allowing those options to
                        overwhelm the core recipe experience. Layout,
                        font size, and color mode all needed to work
                        together while remaining easy to change.
                    </p>

                    <p>
                        The project also required separating public recipe
                        access from administrative functionality. The
                        public application can read recipes without
                        authentication, while creating, editing, and
                        deleting recipes requires an authenticated
                        administrator.
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
                        A customizable recipe platform with a complete
                        content system.
                    </h2>

                    <p>
                        Recipe Jungle combines recipe discovery, search,
                        filtering, favorites, personalization, and
                        administrative content management into a single
                        responsive application.
                    </p>

                    <div className="project-image project-final-image">

                        <img
                            src="/projects/recipe-jungle/final.jpg"
                            alt="Recipe Jungle final interface"
                        />

                    </div>

                    <div className="project-links">

                        <a
                            href="https://recipe-jungle.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Project →
                        </a>

                        <a
                            href="https://github.com/an677531/Recipe-Jungle"
                            target="_blank"
                            rel="noopener noreferrer"
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
                        This project reinforced how much more effective my
                        development process becomes when I break complex
                        work into small, testable pieces. Creating a build
                        plan also made it easier to continue development
                        across multiple sessions without losing track of
                        the larger system.
                    </p>

                    <p>
                        More importantly, the project showed me that
                        implementing a technically complete application
                        does not automatically make its design distinctive.
                        I want to carry that lesson into future projects
                        by spending more time developing a visual direction
                        that feels intentional rather than simply functional.
                    </p>

                    <p>
                        If I continued developing Recipe Jungle, I would
                        expand the content model and personalization system
                        while continuing to refine the visual identity and
                        overall browsing experience.
                    </p>

                </section>


                {/* =========================================
                    PROJECT NAVIGATION
                ========================================== */}

                <nav className="project-navigation">

                    <button
                        onClick={() => onNavigate("projects")}
                    >
                        ← All Projects
                    </button>

                </nav>

            </div>

        </section>
    );
}

export default RecipeJungle;