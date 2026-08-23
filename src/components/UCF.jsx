function UCFCAH({ onNavigate }) {
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
                    HERO
                ========================================== */}

                <header className="project-hero">

                    <p className="project-category">
                        Web Production · CMS Development · Accessibility
                    </p>

                    <h1>
                        UCF College of Arts and Humanities
                    </h1>

                    <p className="project-summary">
                        Ongoing work as an OPS Web Designer on the
                        College of Arts and Humanities web and marketing
                        team, maintaining and building out WordPress
                        websites for the college's programs, research,
                        and events.
                    </p>

                    <div className="desktop-iframe">

                        <iframe
                            src="https://cah.ucf.edu"
                            title="UCF College of Arts and Humanities website"
                            loading="lazy"
                        />

                    </div>

                </header>


                {/* =========================================
                    OVERVIEW
                ========================================== */}

                <section className="project-overview">

                    <div className="project-overview-item">
                        <h3>Role</h3>
                        <p>OPS Web Designer</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Timeline</h3>
                        <p>Feb 2025 – Present</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Tools</h3>
                        <p>WordPress · HTML/CSS · Gravity Forms · Python</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Type</h3>
                        <p>CMS Development · Accessibility · Web Production</p>
                    </div>

                </section>


                {/* =========================================
                    01 — THE ROLE
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        01 — The Role
                    </p>

                    <h2>
                        Turning content requests into accessible,
                        on-brand web pages.
                    </h2>

                    <p>
                        As an OPS Web Designer on the College of Arts and
                        Humanities web and marketing team, I maintain and
                        update WordPress websites through both the CMS
                        and code editor, implementing structured content
                        with HTML, CSS, semantic tags, and site-specific
                        styling conventions.
                    </p>

                    <p>
                        A large part of the role is translating requests
                        from faculty, staff, and marketing into responsive
                        pages that hold up to the college's design and
                        usability standards, while troubleshooting markup,
                        styling, and formatting issues that go beyond
                        what the standard editor can handle.
                    </p>

                </section>


                {/* =========================================
                    02 — ACCESSIBILITY
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        02 — Accessibility
                    </p>

                    <h2>
                        Making archived and legacy content usable for
                        everyone.
                    </h2>

                    <p>
                        A significant part of this role is accessibility
                        remediation, including converting PDFs to
                        accessible HTML and improving digital content
                        that predates current standards. This work
                        extends into building tools, including
                        agentic-AI-assisted workflows, to help mitigate
                        accessibility issues across archived documents
                        and make them usable for a broader audience.
                    </p>

                </section>


                {/* =========================================
                    03 — WORKFLOW AUTOMATION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        03 — Workflow Automation
                    </p>

                    <h2>
                        Reducing repetitive work with forms and scripts.
                    </h2>

                    <p>
                        Beyond page-by-page production, I configure
                        Gravity Forms for the college's various program
                        and event needs, and write Python scripts to
                        streamline repetitive web production tasks,
                        freeing up time for higher-value design and
                        development work across the team.
                    </p>

                </section>


                {/* =========================================
                    04 — FEATURED WORK
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        04 — Featured Work
                    </p>

                    <h2>
                        A few of the pages I've worked on extensively.
                    </h2>

                    <p>
                        Across this role I've contributed to a range of
                        college and program pages, from new feature
                        builds to accessibility passes on existing
                        content.
                    </p>

                    <div className="project-links">

                        <a
                            href="https://cah.ucf.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Project 1 →
                        </a>

                        <a
                            href="https://cah.ucf.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Project 2 →
                        </a>

                        <a
                            href="https://cah.ucf.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Project 3 →
                        </a>

                    </div>

                </section>


                {/* =========================================
                    05 — IMPACT
                ========================================== */}

                <section className="project-section project-result">

                    <p className="section-label">
                        05 — Impact
                    </p>

                    <h2>
                        Recognized for balancing development, design,
                        and content work.
                    </h2>

                    <p>
                        In a recommendation letter, Matthew Dunn, Manager
                        of Web Content for the College of Arts and
                        Humanities, described my contributions to the
                        web and marketing team as significant to the
                        college's programs, research, and events, noting
                        my ability to balance multiple projects across
                        development, design, and content creation, and my
                        initiative in developing more efficient ways to
                        rework large amounts of code.
                    </p>

                    <div className="project-links">

                        <a
                            href="https://cah.ucf.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View College Website →
                        </a>

                    </div>

                </section>


                {/* =========================================
                    06 — REFLECTION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        06 — Reflection
                    </p>

                    <h2>
                        What this role has taught me
                    </h2>

                    <p>
                        Working across CMS, code, and design has sharpened
                        how I think about maintainability, since every
                        page I build or fix has to hold up to future edits
                        by non-developers on the marketing team. It has
                        also deepened my understanding of accessibility
                        as an ongoing practice rather than a one-time
                        checklist, especially when working with archived
                        content that was never built with accessibility
                        in mind.
                    </p>

                </section>


                {/* =========================================
                    NAVIGATION
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

export default UCFCAH;