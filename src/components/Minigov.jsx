import MiniGovLogo from "../assets/MiniGovLogo.png";

import StoryBoard1 from "../assets/StoryBoard1.jpg";
import StoryBoard2 from "../assets/StoryBoard2.jpg";
import StoryBoard3 from "../assets/StoryBoard3.jpg";
import StoryBoard4 from "../assets/StoryBoard4.jpg";
import StoryBoard5 from "../assets/StoryBoard5.jpg";
import StoryBoard6 from "../assets/StoryBoard6.jpg";

import InitialDesignIdea1 from "../assets/InitialDesignIdea1.jpg";
import InitialDesignIdea2 from "../assets/InitialDesignIdea2.jpg";
import InitialDesignIdea3 from "../assets/InitialDesignIdea3.jpg";

import UserFlowConcept from "../assets/UserFlowConcept.png";
import ColorPalette from "../assets/Colors.png";

import AIHelpSummary from "../assets/AIHelpSummary.png";
import LoadScreen from "../assets/LoadScreen.png";
import Summary from "../assets/Summary.png";
import Home from "../assets/Home.png";
import Details from "../assets/Details.png";
import Register from "../assets/Register.png";
import Menu from "../assets/Menu.png";

function MiniGov({ onNavigate }) {
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
                        UX / UI · Mobile Application
                    </p>

                    <h1>
                        MiniGov
                    </h1>

                    <p className="project-summary">
                        A mobile government information application designed
                        to make government resources easier to find,
                        understand, and navigate.
                    </p>

                    <div className="project-image">

                        <img
                            src={MiniGovLogo}
                            alt="MiniGov logo"
                        />

                    </div>

                </header>


                {/* =========================================
                    PROJECT OVERVIEW
                ========================================== */}

                <section className="project-overview">

                    <div className="project-overview-item">

                        <h3>
                            Role
                        </h3>

                        <p>
                            UX/UI Designer · Developer
                        </p>

                    </div>

                    <div className="project-overview-item">

                        <h3>
                            Timeline
                        </h3>

                        <p>
                            2025–2026
                        </p>

                    </div>

                    <div className="project-overview-item">

                        <h3>
                            Team
                        </h3>

                        <p>
                            Five-person interdisciplinary team
                        </p>

                    </div>

                    <div className="project-overview-item">

                        <h3>
                            Focus
                        </h3>

                        <p>
                            UX/UI · Information Architecture · Development
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
                        Making government information easier to navigate
                    </h2>

                    <p>
                        Government websites often contain large amounts of
                        information that can be difficult to navigate and
                        understand, especially for users who are unfamiliar
                        with government terminology and systems.
                    </p>

                    <p>
                        MiniGov was developed as a concept for a mobile
                        application that could provide a simpler way to find
                        government information while giving users access to
                        both concise summaries and more detailed information.
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
                        What the application needed to accomplish
                    </h2>

                    <ul className="project-list">

                        <li>
                            Make government information easier to find.
                        </li>

                        <li>
                            Organize information into clear, understandable
                            categories.
                        </li>

                        <li>
                            Provide simple paths between summaries and
                            detailed information.
                        </li>

                        <li>
                            Create a mobile experience that feels more
                            approachable than a traditional government
                            website.
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
                        Exploring how users might interact with the concept
                    </h2>

                    <p>
                        Early exploration focused on understanding the types
                        of information MiniGov would need to present and how
                        someone might move through the proposed application.
                    </p>

                    <p>
                        Storyboards were created during this early concept
                        stage to visualize possible interactions and
                        communicate the proposed experience. They were created
                        before user testing and were used as a way to explore
                        the idea rather than as research findings.
                    </p>

                    <div className="project-gallery">

                        <img
                            src={StoryBoard1}
                            alt="MiniGov storyboard showing a proposed user scenario"
                        />

                        <img
                            src={StoryBoard2}
                            alt="MiniGov storyboard showing a proposed interaction"
                        />

                        <img
                            src={StoryBoard3}
                            alt="MiniGov storyboard showing a proposed application interaction"
                        />

                        <img
                            src={StoryBoard4}
                            alt="MiniGov storyboard showing a proposed information flow"
                        />

                        <img
                            src={StoryBoard5}
                            alt="MiniGov storyboard showing a proposed government information interaction"
                        />

                        <img
                            src={StoryBoard6}
                            alt="MiniGov storyboard showing a proposed bill information interaction"
                        />

                    </div>

                </section>


                {/* =========================================
                    04 — INFORMATION ARCHITECTURE
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        04 — Information Architecture
                    </p>

                    <h2>
                        Organizing the application's information
                    </h2>

                    <p>
                        The next step was establishing how users would move
                        through the application and how different types of
                        government information would relate to one another.
                    </p>

                    <p>
                        The structure centered around several core areas,
                        including the homepage, search, profiles, legislation,
                        educational information, and notifications. Related
                        information was connected so users could move from a
                        piece of legislation to additional context and related
                        people or resources.
                    </p>

                    <div className="project-image">

                        <img
                            src={UserFlowConcept}
                            alt="MiniGov user flow showing relationships between application screens"
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
                        Establishing the structure of the interface
                    </h2>

                    <p>
                        I then developed rough wireframes to determine how
                        information could be organized across the application's
                        primary screens.
                    </p>

                    <p>
                        These screens represent one early visual direction
                        rather than three separate design directions. The
                        purpose was to establish the overall organization,
                        hierarchy, and relationships between interface elements
                        before developing the final visual system.
                    </p>

                    <div className="project-gallery">

                        <img
                            src={InitialDesignIdea1}
                            alt="Early MiniGov wireframe showing an advanced search interface"
                        />

                        <img
                            src={InitialDesignIdea2}
                            alt="Early MiniGov wireframe showing an information interface"
                        />

                        <img
                            src={InitialDesignIdea3}
                            alt="Early MiniGov wireframe showing a government information screen"
                        />

                    </div>

                </section>


                {/* =========================================
                    06 — VISUAL DESIGN
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        06 — Visual Design
                    </p>

                    <h2>
                        Creating a clear and approachable visual system
                    </h2>

                    <p>
                        The interface developed from the early wireframes into
                        a consistent mobile visual system. The design uses a
                        restrained color palette, consistent interface patterns,
                        and clear hierarchy to make information-heavy screens
                        easier to navigate.
                    </p>

                    <div className="project-image">

                        <img
                            src={ColorPalette}
                            alt="MiniGov color palette"
                        />

                    </div>

                    <div className="project-gallery">

                        <img
                            src={LoadScreen}
                            alt="MiniGov loading screen"
                        />

                        <img
                            src={Home}
                            alt="MiniGov home screen"
                        />

                        <img
                            src={Summary}
                            alt="MiniGov summary screen"
                        />

                        <img
                            src={Details}
                            alt="MiniGov details screen"
                        />

                        <img
                            src={Register}
                            alt="MiniGov registration screen"
                        />

                        <img
                            src={Menu}
                            alt="MiniGov navigation menu"
                        />

                    </div>

                </section>


                {/* =========================================
                    07 — AI ASSISTANT
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        07 — AI Assistant
                    </p>

                    <h2>
                        Making dense information easier to digest
                    </h2>

                    <p>
                        Government information can be difficult to understand
                        when presented in long or highly detailed documents.
                        MiniGov explored an AI assistant as a way to make this
                        information more approachable.
                    </p>

                    <p>
                        The concept allows users to receive a concise summary
                        of dense government information while still being able
                        to access the complete details when needed. This creates
                        a simpler entry point without removing the underlying
                        information.
                    </p>

                    <div className="project-image">

                        <img
                            src={AIHelpSummary}
                            alt="MiniGov AI assistant summarizing government information"
                        />

                    </div>

                </section>


                {/* =========================================
                    08 — TESTING
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        08 — Testing
                    </p>

                    <h2>
                        Evaluating the proposed experience
                    </h2>

                    <p>
                        Usability testing was used to identify areas where the
                        proposed experience could be improved. Testing focused
                        on how users understood the navigation, information
                        hierarchy, and interactive elements.
                    </p>

                    <p>
                        A video walkthrough of the testing process will be
                        added here.
                    </p>

                    <div className="project-image">

                        <div>
                            Testing Video Placeholder
                        </div>

                    </div>

                </section>


                {/* =========================================
                    09 — DEVELOPMENT
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        09 — Development
                    </p>

                    <h2>
                        Bringing the interface into an interactive application
                    </h2>

                    <p>
                        The project also involved front-end development and
                        connecting the interface to application data. I
                        contributed to implementing the interface and worked
                        across front-end and back-end functionality as part of
                        the development team.
                    </p>

                    <p>
                        The project used web technologies including JavaScript,
                        PHP, MySQL, HTML, CSS, and Git while developing the
                        application's functionality.
                    </p>

                </section>


                {/* =========================================
                    10 — CHALLENGES
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        10 — Challenges
                    </p>

                    <h2>
                        Balancing simplicity with information depth
                    </h2>

                    <p>
                        One of the central challenges was presenting large
                        amounts of government information without overwhelming
                        the user.
                    </p>

                    <p>
                        The design addressed this by separating concise
                        summaries from more detailed information and by
                        organizing related content into predictable navigation
                        paths. The AI assistant concept provided another way
                        to make dense information easier to approach.
                    </p>

                </section>


                {/* =========================================
                    11 — FINAL RESULT
                ========================================== */}

                <section className="project-section project-result">

                    <p className="section-label">
                        11 — The Result
                    </p>

                    <h2>
                        A more approachable way to explore government
                        information
                    </h2>

                    <p>
                        MiniGov brought together information architecture,
                        interface design, interaction design, and development
                        into a mobile government information concept.
                    </p>

                    <div className="project-gallery">

                        <img
                            src={Home}
                            alt="MiniGov home screen"
                        />

                        <img
                            src={Summary}
                            alt="MiniGov summary screen"
                        />

                        <img
                            src={Details}
                            alt="MiniGov details screen"
                        />

                    </div>

                </section>


                {/* =========================================
                    12 — REFLECTION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        12 — Reflection
                    </p>

                    <h2>
                        What I learned
                    </h2>

                    <p>
                        MiniGov gave me experience working through a product
                        from early concept exploration and information
                        architecture through interface design, testing, and
                        development.
                    </p>

                    <p>
                        The project reinforced the importance of information
                        hierarchy when designing for content-heavy
                        applications. Instead of trying to remove complexity
                        from the underlying information, the interface can
                        provide clearer paths through it.
                    </p>

                    <p>
                        The AI assistant exploration also demonstrated how
                        emerging technology can be considered as part of an
                        interface rather than treated as a separate feature.
                        In this case, its value came from helping users
                        understand dense information without preventing access
                        to the complete source material.
                    </p>

                </section>


                {/* =========================================
                    PROJECT NAVIGATION
                ========================================== */}

                <nav className="project-navigation">

                    <a href="/projects">
                        ← All Projects
                    </a>

                    <a href="/projects">
                        Projects →
                    </a>

                </nav>

            </div>

        </section>
    );
}

export default MiniGov;