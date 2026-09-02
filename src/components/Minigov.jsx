import { useState } from "react";

import MiniGovLogo from "../assets/MiniGovLogo2.png";

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


/* =========================================
   IMAGE SLIDER
========================================= */

function ImageSlider({ images }) {

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage(
            (current) => (current + 1) % images.length
        );
    };

    const previousImage = () => {
        setCurrentImage(
            (current) =>
                (current - 1 + images.length) % images.length
        );
    };

    return (
        <div className="graphic-slider">

            <div className="graphic-slider-image">

                <img
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                />

            </div>

            {images.length > 1 && (

                <div className="graphic-slider-controls">

                    <button
                        type="button"
                        onClick={previousImage}
                        aria-label="Previous image"
                    >
                        ←
                    </button>

                    <span>
                        {currentImage + 1} / {images.length}
                    </span>

                    <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next image"
                    >
                        →
                    </button>

                </div>

            )}

        </div>
    );
}


/* =========================================
   MINIGOV
========================================= */

function MiniGov({ onNavigate }) {

    /* =========================================
       SLIDER IMAGE ARRAYS
    ========================================== */

    const storyboards = [
        {
            src: StoryBoard1,
            alt: "MiniGov storyboard exploring a user's interaction with government information"
        },
        {
            src: StoryBoard2,
            alt: "MiniGov storyboard showing a user navigating the proposed application"
        },
        {
            src: StoryBoard3,
            alt: "MiniGov storyboard showing a proposed government information experience"
        },
        {
            src: StoryBoard4,
            alt: "MiniGov storyboard exploring how a user moves through MiniGov"
        },
        {
            src: StoryBoard5,
            alt: "MiniGov storyboard showing a user exploring legislative information"
        },
        {
            src: StoryBoard6,
            alt: "MiniGov storyboard showing a user finding information about a bill"
        }
    ];


    const initialDesignIdeas = [
        {
            src: InitialDesignIdea1,
            alt: "MiniGov early wireframe showing the search and advanced search experience"
        },
        {
            src: InitialDesignIdea2,
            alt: "MiniGov early wireframe showing a bill information interface"
        },
        {
            src: InitialDesignIdea3,
            alt: "MiniGov early wireframe showing the structure of a government information screen"
        }
    ];


    const finalScreens = [
        {
            src: LoadScreen,
            alt: "MiniGov loading screen"
        },
        {
            src: Home,
            alt: "MiniGov homepage showing the main navigation and information areas"
        },
        {
            src: Summary,
            alt: "MiniGov bill summary screen"
        },
        {
            src: Details,
            alt: "MiniGov detailed bill information screen"
        },
        {
            src: Register,
            alt: "MiniGov registration screen"
        },
        {
            src: Menu,
            alt: "MiniGov navigation menu"
        }
    ];


    const aiAssistantScreens = [
        {
            src: AIHelpSummary,
            alt: "MiniGov AI Help interface providing a simplified summary of government information"
        }
    ];


    const resultScreens = [
        {
            src: Home,
            alt: "MiniGov final homepage"
        },
        {
            src: Summary,
            alt: "MiniGov final bill summary screen"
        },
        {
            src: Details,
            alt: "MiniGov final detailed information screen"
        }
    ];


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
                        Redesigning Congress.gov into a clearer,
                        more approachable mobile experience for
                        understanding government information.
                    </p>



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
                            Lead Designer · UI/UX Designer
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>
                            Team
                        </h3>

                        <p>
                            Team Minerva · Five-person interdisciplinary team
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>
                            Timeline
                        </h3>

                        <p>
                            Semester-long UCD project
                        </p>

                    </div>


                    <div className="project-overview-item">

                        <h3>
                            Tools
                        </h3>

                        <p>
                            Figma · Paper Prototyping · User Research
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
                        Redesigning Congress.gov for clarity and trust
                    </h2>

                    <p>
                        Congress.gov is the authoritative source for tracking
                        bills, laws, members, and legislative activity in the
                        United States. However, the amount of information
                        presented across the platform can make it difficult for
                        new or casual users to understand where to begin.
                    </p>

                    <p>
                        Our early research showed that users experienced the
                        existing interface as dense, outdated, and difficult
                        to navigate. Even politically engaged participants
                        rarely visited Congress.gov voluntarily because the
                        experience did not feel approachable or easy to use.
                    </p>

                    <p>
                        MiniGov was created to explore how the credibility and
                        depth of Congress.gov could be preserved while making
                        government information easier to understand and
                        navigate.
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
                        Making government information easier to understand
                    </h2>

                    <ul className="project-list">

                        <li>
                            Make government information easier to find and navigate.
                        </li>

                        <li>
                            Reduce the visual density of information-heavy pages.
                        </li>

                        <li>
                            Make complex legislative information easier to understand.
                        </li>

                        <li>
                            Create clearer navigation for students, voters,
                            teachers, and other first-time users.
                        </li>

                        <li>
                            Preserve enough detail and credibility for users
                            who need deeper legislative information.
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
                        Understanding how people interact with government information
                    </h2>

                    <p>
                        The project followed a User-Centered Design process
                        beginning with user interviews, surveys, comprehension
                        testing, and competitive analysis. We looked at how
                        different audiences—including students, teachers,
                        voters, and more experienced political users—might
                        approach government information.
                    </p>

                    <p>
                        One of the strongest findings was that users had a much
                        easier time understanding legislative information when
                        it was presented in plain language rather than only as
                        legal text. This finding helped shape the idea of
                        providing different levels of information instead of
                        forcing every user to begin with the same level of
                        detail.
                    </p>

                    <p>
                        We also analyzed legislation.gov.au as a competitor and
                        completed a task-based evaluation of its search and
                        information architecture. The analysis reinforced the
                        importance of prominent search, simple navigation, and
                        making plain-language summaries immediately accessible.
                    </p>


                    <ImageSlider images={storyboards} />

                </section>


                {/* =========================================
                    04 — INFORMATION ARCHITECTURE
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        04 — Information Architecture
                    </p>

                    <h2>
                        Building a simpler structure around complex information
                    </h2>

                    <p>
                        Before developing the visual interface, we established
                        the application's core information architecture and
                        data relationships. The structure was organized around
                        five major areas: Profile, Homepage, Search, Pages,
                        and Notifications.
                    </p>

                    <p>
                        Pages could represent bills, laws, members, or
                        educational content, with related information connected
                        throughout the experience. This allowed a user to move
                        from a legislative item to additional context, related
                        people, or educational information without having to
                        restart their search.
                    </p>

                    <p>
                        Search, sorting, and filtering were also treated as a
                        connected system. Basic search remained simple for new
                        users, while advanced filters could be revealed for
                        users who needed more control over their results.
                    </p>


                    <div className="project-image">

                        <img
                            src={UserFlowConcept}
                            alt="MiniGov information architecture and user flow"
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
                        Exploring the structure before defining the visual style
                    </h2>

                    <p>
                        I began the interface design process with paper
                        prototypes before moving into low-fidelity Figma
                        wireframes. These early screens explored the core
                        experience, including the homepage, search results,
                        advanced search, bill summaries, detailed information,
                        sign-in, registration, and navigation.
                    </p>

                    <p>
                        The wireframes helped establish hierarchy and
                        interaction patterns before visual styling became the
                        focus. They also gave us an early prototype to use
                        during usability testing and identify where users were
                        getting confused.
                    </p>

                    <p>
                        Early testing revealed that some interactive elements
                        did not look interactive enough and that users needed a
                        clearer way to return home. These findings influenced
                        the navigation and interaction patterns developed in
                        the high-fidelity designs.
                    </p>


                    <ImageSlider images={initialDesignIdeas} />

                </section>


                {/* =========================================
                    06 — VISUAL DESIGN
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        06 — Visual Design
                    </p>

                    <h2>
                        Finding the right balance between credibility and approachability
                    </h2>

                    <p>
                        Rather than immediately committing to one visual
                        direction, I designed three distinct high-fidelity
                        approaches and tested them with users. The directions
                        ranged from a conservative government-inspired
                        interface to a more playful visual system.
                    </p>

                    <p>
                        The moderate direction received the strongest overall
                        response. Users responded positively to its darker
                        interface, restrained use of blue, and balance between
                        modern visual design and government credibility. This
                        direction became the foundation for the final visual
                        system.
                    </p>


                    <div className="project-image">

                        <img
                            src={ColorPalette}
                            alt="MiniGov color palette showing the project's black, white, gray, and blue color system"
                        />

                    </div>
                    <div>

                        <img
                            className="project-image"
                            src={MiniGovLogo}
                            alt="MiniGov logo"
                        />

                    </div>


                    <p>
                        The final system uses black, white, and several shades
                        of gray with blue reserved primarily for actions and
                        emphasis. Inter was used throughout the interface for
                        readability, while consistent navigation, button
                        states, and larger tap targets helped make the
                        experience easier to use.
                    </p>


                    <ImageSlider images={finalScreens} />

                </section>

                {/* =========================================
                    07 — AI ASSISTANT
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        07 — AI Assistant
                    </p>

                    <h2>
                        Helping users understand dense legislative information
                    </h2>

                    <p>
                        One of the challenges identified during the project was
                        the difficulty of understanding long and complex
                        legislative documents. Instead of expecting every user
                        to immediately read the full source material, MiniGov
                        explored an AI Help feature that could provide a more
                        approachable starting point.
                    </p>

                    <p>
                        The concept allows users to receive a concise
                        explanation of complex information while maintaining
                        access to the complete details. This supports the
                        project's broader goal of creating different levels of
                        information for different users and reading needs.
                    </p>
                    <ImageSlider images={aiAssistantScreens} />

                </section>


                {/* =========================================
                    08 — TESTING
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        08 — Usability Testing
                    </p>

                    <h2>
                        Testing the design with real users
                    </h2>

                    <p>
                        We conducted usability testing throughout the design
                        process, beginning with a low-fidelity think-aloud test
                        and later evaluating the high-fidelity prototype. The
                        testing process included task analysis, post-experience
                        surveys, and an expert heuristic evaluation.
                    </p>

                    <p>
                        The high-fidelity testing showed that users generally
                        found the navigation and information layout easier to
                        understand. Both MiniGov and the existing Congress.gov
                        experience received an average post-experience rating
                        of 8.2 out of 10, while the qualitative feedback
                        highlighted the balance between simplicity and having
                        enough information as one of the strongest aspects of
                        the redesign.
                    </p>

                    <p>
                        Testing also identified areas for further improvement,
                        particularly confusion between the share and
                        bookmark icons and inconsistencies in how users
                        returned to the homepage.
                    </p>
                </section>

                {/* =========================================
                    09 — ITERATION
                ========================================== */}

                <section className="project-section">

                    <p className="section-label">
                        09 — Iteration
                    </p>

                    <h2>
                        Using testing to refine the final experience
                    </h2>

                    <p>
                        The testing results helped distinguish between problems
                        with the design itself and limitations caused by the
                        prototype. Navigation and information hierarchy were
                        consistently understood well, while specific interface
                        controls created more confusion.
                    </p>

                    <p>
                        These findings informed the next iteration of the
                        interface. Interactive elements needed to communicate
                        their purpose more clearly, and navigation needed to
                        provide consistent paths back to the homepage.
                    </p>

                    <p>
                        The project reinforced the value of testing multiple
                        visual directions and validating design decisions with
                        users rather than relying entirely on personal
                        preference.
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
                        Balancing simplicity with credibility
                    </h2>

                    <p>
                        The biggest design challenge was finding the right
                        balance between making government information
                        approachable and keeping enough depth for users who
                        need detailed information.
                    </p>

                    <p>
                        A design that became too simplified risked losing the
                        credibility and usefulness of the original source,
                        while a design that remained too dense would recreate
                        the same problems users experienced with Congress.gov.
                    </p>

                    <p>
                        The final direction addressed this through clear
                        hierarchy, tiered information, simplified navigation,
                        and features such as AI Help that provide an easier
                        entry point into complex content.
                    </p>

                </section>


                {/* =========================================
    11 — FINAL RESULT
========================================= */}

                <section className="project-section project-result">

                    <p className="section-label">
                        11 — The Result
                    </p>

                    <h2>
                        A more approachable way to explore government information
                    </h2>

                    <p>
                        MiniGov transforms the information-heavy experience of
                        Congress.gov into a mobile-first interface focused on clarity,
                        hierarchy, and approachability.
                    </p>

                    <p>
                        The final design brings together the research findings,
                        information architecture, interaction patterns, visual system,
                        and usability testing into one cohesive experience. The result
                        is intended to make government information feel less
                        intimidating while preserving access to the depth users may need.
                    </p>


                    <ImageSlider images={resultScreens} />


                    <div className="project-links">

                        <a
                            href="https://www.figma.com/proto/XKVF1M4prpNeISkGuO1JXO/High-Fidelity-Revamp?node-id=44-269&p=f&t=bCEN4p1M0iDrC7VL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A232"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Interactive Prototype →
                        </a>

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
                        MiniGov taught me how much impact visual and interaction
                        design can have on how people perceive complex
                        information. The project was not about adding more
                        information to Congress.gov, but about creating clearer
                        paths through the information that already exists.
                    </p>

                    <p>
                        Designing three distinct high-fidelity directions was
                        especially valuable because it allowed us to test the
                        overall tone of the product instead of simply refining
                        one visual approach. User feedback gave us evidence for
                        choosing a direction that felt modern and approachable
                        while still maintaining credibility.
                    </p>

                    <p>
                        The project also reinforced the importance of designing
                        for different levels of understanding. Features such
                        as summaries, detailed information, educational
                        connections, and AI Help can work together to let users
                        decide how deeply they want to engage with the subject.
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