function Preserv({ onNavigate }) {
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
                        Web Design · Backend Development · React / PHP / MySQL
                    </p>

                    <h1>
                        Preserv
                    </h1>

                    <p className="project-summary">
                        A virtual pantry management application that helps
                        users track groceries, avoid food waste, and
                        automate data entry through barcode scanning.
                    </p>

                    <div className="desktop-iframe">

                        <iframe
                            src="https://preserv-one.vercel.app/"
                            title="Preserv live demo"
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
                        <p>Team Lead · Auxiliary Developer · Designer</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Timeline</h3>
                        <p>Academic Project · 8 Milestones</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Tools</h3>
                        <p>React · PHP · MySQL · QuaggaJS · Docker</p>
                    </div>

                    <div className="project-overview-item">
                        <h3>Type</h3>
                        <p>Pantry Management System</p>
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
                        Groceries expire quietly, and manual tracking
                        doesn't scale.
                    </h2>

                    <p>
                        Households lose money and food when items are
                        forgotten in the back of a pantry until it's too
                        late. Most existing tracking solutions require
                        tedious manual entry for every single item, which
                        makes them impractical for everyday grocery
                        management.
                    </p>

                    <p>
                        Preserv was built to make pantry tracking fast
                        enough that people would actually keep using it,
                        by combining automated data entry with clear,
                        at-a-glance expiration status.
                    </p>

                    <p>
                        As team lead, I worked as an auxiliary developer
                        and designer, facilitating the team's UI/UX design
                        efforts across all eight milestones and owning
                        user testing to keep the app grounded in how
                        people actually used it.
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
                        Build a pantry system around automation and
                        shared households.
                    </h2>

                    <ul className="project-list">

                        <li>
                            Let users scan a barcode instead of manually
                            typing in every grocery item.
                        </li>

                        <li>
                            Automatically surface expiration status and
                            low-stock items.
                        </li>

                        <li>
                            Support shared households with permission-based
                            access to a common pantry and shopping list.
                        </li>

                        <li>
                            Enrich items with real nutrition data pulled
                            from external food APIs.
                        </li>

                        <li>
                            Keep the system usable even when scanning or
                            external APIs fail.
                        </li>

                    </ul>

                </section>


                {/* =========================================
                    03 — SERVER-SIDE ARCHITECTURE
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        03 — Server-side Architecture
                    </p>

                    <h2>
                        React on the frontend, PHP and MySQL behind it.
                    </h2>

                    <p>
                        Preserv uses PHP and MySQL to store, send, update,
                        and delete data, connected to the React frontend
                        through Axios GET, POST, PUT, and DELETE requests.
                        The PHP backend, hosted on the university's
                        student server, processes each request based on
                        the HTTP method, runs the corresponding MySQL
                        query, and returns a JSON response.
                    </p>

                    <p>
                        Access control headers, session variables, and
                        regex-based validation were added on the backend
                        to keep requests authenticated and correctly
                        formatted. Logged-in users are tracked through a
                        session variable that filters every query so
                        users, and household members, only ever see the
                        data they're permitted to access.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/preserv/architecture.jpg"
                            alt="Preserv server-side architecture diagram"
                        />

                    </div>

                </section>


                {/* =========================================
                    04 — DATABASE DESIGN
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        04 — Database Design
                    </p>

                    <h2>
                        Six relational tables covering users, pantry data,
                        and households.
                    </h2>

                    <p>
                        All application data lives in MySQL across six
                        tables: users, pantry items, shopping list items,
                        recipes, households, and household members. The
                        pantry table tracks item status automatically,
                        flagging items as fresh, near expiration, or
                        expired based on their expiration date, while the
                        household and members tables handle shared pantry
                        access through owner-assigned, invite-code-based
                        permissions.
                    </p>

                    <p>
                        Passwords are hashed before storage, and every
                        write endpoint checks an active session to keep
                        household data scoped to the right users.
                    </p>

                </section>


                {/* =========================================
                    05 — API INTEGRATION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        05 — API Integration
                    </p>

                    <h2>
                        External APIs handle the data users shouldn't
                        have to enter by hand.
                    </h2>

                    <p>
                        The Barcode Spider API supplies product names and
                        images from a scanned barcode, while a nutrition
                        API (FatSecret, later replaced with the USDA
                        FoodData Central API) supplies nutrition facts
                        such as calories, fat, sodium, and protein.
                        Nutrition data is fetched live rather than stored,
                        keeping the database lean and compliant with API
                        data-retention guidelines.
                    </p>

                    <p>
                        If an external API is unavailable or a barcode
                        isn't recognized, the app falls back to manual
                        entry rather than blocking the user, so a failed
                        lookup is never a dead end.
                    </p>

                </section>


                {/* =========================================
                    06 — PHYSICAL ARTIFACT: BARCODE SCANNING
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        06 — Physical Artifact
                    </p>

                    <h2>
                        Turning a phone camera into the pantry's main
                        input device.
                    </h2>

                    <p>
                        Preserv's physical artifact requirement is met
                        through barcode scanning. Early testing showed
                        that manual entry was too slow for daily use, so
                        the phone camera became the primary interface
                        between the user and the system, using the
                        QuaggaJS library for real-time barcode detection.
                    </p>

                    <p>
                        Once QuaggaJS extracts a UPC-A code, a custom
                        scanning component converts it to EAN-13 format
                        and sends it to the Barcode Spider API, which
                        returns the product's name and image for
                        automatic entry into the pantry. The current
                        limitation is that only standard UPC-A barcodes
                        are supported, so uncommon formats still require
                        manual input.
                    </p>

                    <div className="project-image">

                        <img
                            src="/projects/preserv/scanning-workflow.jpg"
                            alt="Preserv barcode scanning workflow diagram"
                        />

                    </div>

                </section>


                {/* =========================================
                    07 — TESTING
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        07 — Testing
                    </p>

                    <h2>
                        Developer and user testing across devices,
                        browsers, and Docker.
                    </h2>

                    <p>
                        The team tested across Windows and macOS, and
                        across Chrome, Edge, Firefox, and Safari, which
                        surfaced browser-specific issues like Chrome's
                        stricter cross-site cookie policy silently
                        breaking session persistence. Every developer
                        also ran the project through Docker to confirm it
                        would work consistently across machines.
                    </p>

                    <p>
                        As team lead, I planned and ran all user testing,
                        designing task-based Google Forms and recruiting
                        testers to walk through a deployed Vercel build.
                        Core CRUD flows like adding, editing, and deleting
                        pantry items, recipes, and shopping list items all
                        reached a 100% success rate. Barcode scanning was
                        the clear outlier, with only about a third of
                        testers completing it with ease, mostly due to
                        laptop webcams struggling to focus on a barcode,
                        an issue expected to improve on phone cameras
                        with higher resolution.
                    </p>

                    <p>
                        Synthesizing tester feedback into concrete fixes,
                        like tightening input validation, clarifying
                        which account elements were clickable, and
                        flagging the recipe-to-shopping-list quantity
                        issue, also fed directly back into ongoing UI/UX
                        design decisions across the app.
                    </p>

                </section>


                {/* =========================================
                    08 — DEBUGGING
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        08 — Debugging
                    </p>

                    <h2>
                        Chasing down CORS errors, session bugs, and
                        image storage limits.
                    </h2>

                    <p>
                        A recurring challenge was getting session
                        variables to persist reliably across PHP files,
                        which initially surfaced as CORS errors in the
                        browser console. The fix required whitelisting
                        specific origins, enabling credentials on both
                        the PHP and Axios sides, and, once Chrome's
                        stricter cookie policy was identified as the
                        deeper cause, explicitly setting SameSite and
                        Secure cookie parameters before starting each
                        session.
                    </p>

                    <p>
                        Other fixes included switching image storage to
                        MEDIUMTEXT to support base64-encoded uploads,
                        resizing images to stay under the server's post
                        size limit, and restructuring recipe ingredients
                        into structured name, amount, and unit fields to
                        eliminate formatting artifacts in the database.
                    </p>

                </section>


                {/* =========================================
                    09 — DEPLOYMENT
                ========================================== */}

                <section className="project-section project-result">

                    <p className="section-label">
                        09 — Deployment
                    </p>

                    <h2>
                        A fully deployed pantry system, with documentation
                        to match.
                    </h2>

                    <p>
                        Preserv is deployed with Vercel for the frontend,
                        while PHP and MySQL run on a university student
                        server. The final milestone paired deployment
                        with a full user guide, training documentation
                        covering the project's frontend and backend file
                        structure, and a recorded video walkthrough of
                        the app's core features.
                    </p>

                    <div className="project-links">

                        <a
                            href="https://preserv-one.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Project →
                        </a>

                        <a
                            href="https://github.com/an677531/preserv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View GitHub →
                        </a>

                        <a
                            href="https://youtu.be/t01ee2bOd5Q?si=YtZK-u8Lqgd_EKVN"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Watch Video Walkthrough →
                        </a>

                    </div>

                </section>


                {/* =========================================
                    10 — REFLECTION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        10 — Reflection
                    </p>

                    <h2>
                        What I learned
                    </h2>

                    <p>
                        Building Preserv's backend reinforced how much
                        cross-browser and cross-environment testing
                        matters. Issues that never appeared in Firefox
                        showed up immediately in Chrome, and a project
                        that ran fine locally could still fail on Docker
                        for teammates on different machines. Catching
                        those gaps early made the app far more reliable
                        by the time it reached real users.
                    </p>

                    <p>
                        If the project continued past this point, the
                        priorities would be hosting the frontend, backend,
                        and database together to fix iOS compatibility,
                        broadening barcode format support, and exploring
                        features testers repeatedly asked for, like
                        receipt scanning and speech-to-text pantry entry.
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

export default Preserv;