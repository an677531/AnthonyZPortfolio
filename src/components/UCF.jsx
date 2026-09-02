import CTA from "../assets/CTA.png"
import JazzFestival from "../assets/JazzFestivalFlyer.png"
function UCFWebDesign({ onNavigate }) {
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
                    HERO
                ========================================== */}

                <header className="project-hero">

                    <p className="project-category">
                        Professional Experience · Web Design · Development
                    </p>

                    <h1>
                        University of Central Florida
                    </h1>

                    <p className="project-summary">
                        From February 2025 to the present, I've worked as a
                        Web Designer for UCF's College of Arts and Humanities,
                        building and maintaining web experiences, improving
                        accessibility, and helping the college's web team
                        solve all kinds of problems along the way.
                    </p>

                    <div className="desktop-iframe">

                        <iframe
                            src="https://cah.ucf.edu/"
                            title="University of Central Florida College of Arts and Humanities website"
                            loading="lazy"
                        />

                    </div>

                </header>


                {/* =========================================
                    QUICK INFO
                ========================================== */}

                <section className="project-overview">

                    <div className="project-overview-item">

                        <h3>Position</h3>

                        <p>
                            Web Designer
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>Organization</h3>

                        <p>
                            UCF College of Arts and Humanities
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>Since</h3>

                        <p>
                            February 2025
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>Stack</h3>

                        <p>
                            WordPress · HTML · CSS · JavaScript · PHP · Python
                        </p>

                    </div>

                </section>


                {/* =========================================
                    WHAT I DO
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        What I Do
                    </p>

                    <h2>
                        A little bit of everything web
                    </h2>

                    <p>
                        My role at UCF sits somewhere between design,
                        development, content, and technical problem-solving.
                        I work with web developers, marketing and
                        communications staff, faculty, and other college
                        personnel to turn requests into working web
                        experiences.
                    </p>

                    <p>
                        Some days that means building a new page. Other days
                        it means fixing something that broke in production,
                        improving an existing component, remediating
                        accessibility issues, working on a WordPress plugin,
                        or figuring out how to make a repetitive task less
                        repetitive.
                    </p>

                    <ul className="project-list">

                        <li>
                            Develop and maintain responsive WordPress
                            experiences using HTML, CSS, JavaScript, and PHP.
                        </li>

                        <li>
                            Build page layouts, navigation structures,
                            content hierarchies, forms, and interactive
                            experiences.
                        </li>

                        <li>
                            Assist with WordPress theme and plugin development.
                        </li>

                        <li>
                            Troubleshoot and resolve production issues.
                        </li>

                        <li>
                            Perform accessibility remediation and apply
                            WCAG-informed practices.
                        </li>

                        <li>
                            Create Python scripts to automate repetitive
                            web-production tasks.
                        </li>

                        <li>
                            Create visual assets and layouts for web,
                            print, events, and social media.
                        </li>

                    </ul>

                </section>


                {/* =========================================
                    THE WEBSITE
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        The Website
                    </p>

                    <h2>
                        Working on a real, very large website
                    </h2>

                    <p>
                        The College of Arts and Humanities website serves a
                        large and varied audience, covering academic programs,
                        departments, faculty, research, events, news,
                        performances, student resources, and more.
                    </p>

                    <p>
                        I work as part of the team responsible for maintaining
                        and expanding that ecosystem. That means working
                        within an established WordPress environment and
                        balancing new ideas with existing systems, content,
                        accessibility requirements, and the people who have
                        to maintain everything after it goes live.
                    </p>


                    <div className="desktop-iframe">

                        <iframe
                            src="https://cah.ucf.edu/"
                            title="University of Central Florida College of Arts and Humanities website"
                            loading="lazy"
                        />

                    </div>

                </section>


                {/* =========================================
                    SELECTED WORK
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        Selected Work
                    </p>

                    <h2>
                        Some things I've built
                    </h2>

                    <p>
                        Not every page on the CAH website is mine, and much of
                        the site is the result of collaboration across the
                        web team. These are a few examples that represent
                        different parts of the work I've contributed to.
                    </p>

                    <div className="desktop-iframe">

                        <iframe
                            src="https://cah.ucf.edu/spotlight/"
                            title="University of Central Florida College of Arts and Humanities spotligh page"
                            loading="lazy"
                        />
                    </div>
                    <div className="desktop-iframe">
                        <iframe
                            src="https://cah.ucf.edu/languages/study-abroad/"
                            title="University of Central Florida College of Arts and Humanities study abroad page"
                            loading="lazy"
                        />

                    </div>

                    <div className="project-links">

                        <a
                            href="https://cah.ucf.edu/spotlight/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CAH Spotlight →
                        </a>

                        <a
                            href="https://cah.ucf.edu/languages/study-abroad/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Study Abroad →
                        </a>

                    </div>

                </section>


                {/* =========================================
                    MORE WEB WORK
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        More Web Work
                    </p>

                    <h2>
                        Content-heavy experiences
                    </h2>

                    <p>
                        I've also contributed to larger sections of the
                        website where information architecture, content
                        organization, and maintainability become especially
                        important.
                    </p>

                    <p>
                        The organizational chart and Theatre Production
                        Archive are examples of this kind of work. These
                        experiences were developed as larger team efforts,
                        rather than being projects I can claim as entirely
                        my own.
                    </p>

                    <div className="desktop-iframe">
                        <iframe
                            src="https://cah.ucf.edu/about/administration/org-chart/"
                            title="UCF CAH organizational chart"
                            loading="lazy"
                        />

                    </div>
                    <div className="desktop-iframe">
                        <iframe
                            src="https://cah.ucf.edu/performingarts/theatre/production-archive/"
                            title="UCF Theatre production archive"
                            loading="lazy"
                        />

                    </div>

                    <div className="project-links">

                        <a
                            href="https://cah.ucf.edu/about/administration/org-chart/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Organizational Chart →
                        </a>

                        <a
                            href="https://cah.ucf.edu/performingarts/theatre/production-archive/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Theatre Production Archive →
                        </a>

                    </div>

                </section>


                {/* =========================================
                    ACCESSIBILITY
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        Accessibility
                    </p>

                    <h2>
                        Making the web more accessible
                    </h2>

                    <p>
                        Accessibility is a significant part of my work at
                        UCF. I've worked on remediation across existing
                        content as well as accessibility considerations for
                        new pages and features.
                    </p>

                    <p>
                        This includes improving HTML and content structure,
                        addressing issues in archived material, and converting
                        PDFs into more accessible web-based experiences.
                    </p>

                    <p>
                        Working with a large archive also made it clear that
                        accessibility problems don't always scale well when
                        solved manually. That led me to start experimenting
                        with automation and AI-assisted tools for document
                        remediation.
                    </p>

                </section>


                {/* =========================================
                    PDF PROJECT
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        Side Project · Built Alongside My UCF Work
                    </p>

                    <h2>
                        Turning PDFs into accessible HTML
                    </h2>

                    <p>
                        One project that grew directly out of this work is a
                        Python-based PDF-to-HTML converter.
                    </p>

                    <p>
                        The goal is to take existing PDF documents and turn
                        them into structured HTML that can be more easily
                        presented and accessed on the web. The project uses
                        PyMuPDF to extract document content and a locally
                        hosted language model to help identify semantic
                        elements such as headings, paragraphs, captions,
                        bylines, and lists.
                    </p>

                    <p>
                        Python then generates the HTML rather than asking the
                        language model to rewrite the document. This keeps the
                        original content intact while using AI where it is
                        actually useful: helping determine what a piece of
                        content represents.
                    </p>

                    <div className="project-links">

                        <a
                            href="https://github.com/an677531/PDF_to_HTML_Converter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View the Project on GitHub →
                        </a>

                    </div>

                </section>


                {/* =========================================
                    AUTOMATION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        Automation
                    </p>

                    <h2>
                        Finding better ways to do repetitive work
                    </h2>

                    <p>
                        Large websites come with plenty of repetitive tasks.
                        I've written Python scripts and experimented with
                        workflow improvements to make some of that work
                        faster and more consistent.
                    </p>

                    <p>
                        This has included reworking large amounts of code and
                        content, automating portions of production workflows,
                        and exploring how AI can assist with problems that
                        would otherwise require significant amounts of manual
                        work.
                    </p>

                </section>


                {/* =========================================
                    DESIGN WORK
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        Design Beyond the Browser
                    </p>

                    <h2>
                        Web, print, and everything in between
                    </h2>

                    <p>
                        My responsibilities haven't been limited to code.
                        I've also created and refined visual assets for the
                        college, including event and program flyers, social
                        media content, page layouts, image treatments,
                        typography, and other digital communications.
                    </p>

                    <div className="project-gallery">

                        <img
                            src={CTA}
                            alt="Poster with actors on stage and text reading: Dont miss out"
                        />

                        <img
                            src={JazzFestival}
                            alt="Digital and communications design work"
                        />

                    </div>

                </section>


                {/* =========================================
                    WHAT I'VE LEARNED
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        Looking Back
                    </p>

                    <h2>
                        More than just making pages
                    </h2>

                    <p>
                        Working at UCF has given me experience with what web
                        development actually looks like in a large
                        organization. Projects don't always start with a
                        blank canvas, requirements change, old content has
                        to be dealt with, and sometimes the problem isn't
                        obvious until you're already in the code.
                    </p>

                    <p>
                        I've gotten much more comfortable moving between
                        design and development, communicating with
                        non-technical stakeholders, working alongside
                        developers, and taking ownership of problems that
                        don't necessarily fit neatly into one job title.
                    </p>

                    <p>
                        It's also given me the opportunity to explore areas
                        I'm particularly interested in, especially
                        accessibility, automation, and finding practical ways
                        to make web production better.
                    </p>

                </section>


                {/* =========================================
                    RECOMMENDATION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        From My Supervisor
                    </p>

                    <h2>
                        A few words about my work
                    </h2>

                    <blockquote className="project-quote">
                        "Anthony is a thoughtful and creative collaborator.
                        He capably balances multiple projects and possesses
                        significant skills in development, design, and
                        content creation."
                    </blockquote>

                    <p>
                        My supervisor's recommendation also highlights my
                        contributions to website features, plugin and theme
                        development, code optimization, accessibility
                        tooling, visual design, and collaboration with the
                        college's web and marketing teams.
                    </p>

                </section>


                {/* =========================================
                    FINAL
                ========================================== */}

                <section className="project-section project-result">

                    <p className="section-label">
                        The Short Version
                    </p>

                    <h2>
                        I make websites, fix websites, and occasionally
                        convince computers to do the boring parts for me.
                    </h2>

                    <p>
                        My time at UCF has given me the chance to work across
                        design, front-end development, WordPress, accessibility,
                        automation, and content production while contributing
                        to a website used by a large university community.
                    </p>

                    <div className="project-links">

                        <a
                            href="https://cah.ucf.edu/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit UCF CAH →
                        </a>

                        <a
                            href="https://github.com/an677531/PDF_to_HTML_Converter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View PDF to HTML on GitHub →
                        </a>

                    </div>

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

export default UCFWebDesign;
