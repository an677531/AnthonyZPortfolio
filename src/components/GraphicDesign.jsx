import { useState } from "react";

import moonlightPaddle from "../assets/POSTER__Moonlight_Paddle__2.png";
import sunsetYoga from "../assets/POSTER__Sunset_Yoga_2026.png";
import midKnight5K from "../assets/M5K5_Promo__1_.png";
import midKnight5KShirt from "../assets/Mockup.png";
import scubaCertifications from "../assets/POSTER__Scuba_Certification__1.png";
import spookyPowerPilates from "../assets/POSTER__SPOOKY_POWER_PILATES.png";

import knightRiders from "../assets/KNIGHT_RIDERS_club_logo.png";
import bandLogo from "../assets/band_logo.png";
import worldInColors from "../assets/world_in_colors_etsy_logo.jpg";

import floridaMan from "../assets/Florida_Man_on_Tour_Final_Poster.PNG";

function ImageSlider({ images }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((current) => (current + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImage(
            (current) => (current - 1 + images.length) % images.length
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

function GraphicDesign() {
    const eventPosters = [
        {
            src: moonlightPaddle,
            alt: "Moonlight Paddle event poster"
        },
        {
            src: sunsetYoga,
            alt: "Sunset Yoga event poster"
        },
        {
            src: midKnight5K,
            alt: "MidKnight 5K promotional poster"
        },
        {
            src: midKnight5KShirt,
            alt: "MidKnight 5K campaign merchandise"
        },
        {
            src: scubaCertifications,
            alt: "Scuba Certifications event poster"
        },
        {
            src: spookyPowerPilates,
            alt: "Spooky Power Pilates event poster"
        }
    ];

    const logos = [
        {
            src: knightRiders,
            alt: "Knight Riders Motorcycle Club logo"
        },
        {
            src: bandLogo,
            alt: "Abstract band logo"
        },
        {
            src: worldInColors,
            alt: "World in Colors logo"
        }
    ];

    const illustration = [
        {
            src: floridaMan,
            alt: "Florida Man On Tour concept poster"
        }
    ];

    return (
        <section className="project-page">

            <div className="container">

                {/* PROJECT HERO */}

                <header className="project-hero">

                    <p className="project-category">
                        Graphic Design · Branding · Illustration
                    </p>

                    <h1>
                        Graphic Design
                    </h1>

                    <p className="project-summary">
                        A collection of graphic design work spanning event
                        promotion, visual identity, illustration, and campaign
                        design. The work ranges from university recreation
                        programming to independent brand identities and
                        conceptual poster work.
                    </p>

                </header>


                {/* PROJECT OVERVIEW */}

                <section className="project-overview">

                    <div className="project-overview-item">

                        <h3>
                            Role
                        </h3>

                        <p>
                            Graphic Designer
                        </p>

                    </div>

                    <div className="project-overview-item">

                        <h3>
                            Focus
                        </h3>

                        <p>
                            Branding · Posters · Illustration
                        </p>

                    </div>

                    <div className="project-overview-item">

                        <h3>
                            Tools
                        </h3>

                        <p>
                            Adobe Creative Suite · Illustrator · Photoshop
                        </p>

                    </div>

                    <div className="project-overview-item">

                        <h3>
                            Work
                        </h3>

                        <p>
                            Selected Portfolio
                        </p>

                    </div>

                </section>


                {/* EVENT POSTERS */}

                <section className="project-section">

                    <p className="section-label">
                        01 — Event Posters
                    </p>

                    <h2>
                        UCF Recreation & Wellness Center
                    </h2>

                    <p>
                        A series of promotional posters designed for
                        university recreation programming. Each poster uses a
                        distinct visual language suited to the tone and
                        audience of its event while maintaining clear
                        information hierarchy and recognizable program
                        branding.
                    </p>

                    <ImageSlider images={eventPosters} />

                    <div className="graphic-project-descriptions">

                        <div>
                            <h3>
                                Moonlight Paddle
                            </h3>

                            <p>
                                Poster design for a guided nighttime kayaking
                                event. A restrained navy palette, layered
                                silhouettes, and luminous full moon establish
                                atmosphere and depth while a modular
                                information grid organizes scheduling and
                                registration details.
                            </p>
                        </div>

                        <div>
                            <h3>
                                Sunset Yoga
                            </h3>

                            <p>
                                Promotional poster for an outdoor yoga series
                                using a saturated pink-to-purple gradient and
                                graphic sun illustration to create visual
                                impact while maintaining a structured
                                information hierarchy.
                            </p>
                        </div>

                        <div>
                            <h3>
                                MidKnight 5K
                            </h3>

                            <p>
                                Campaign identity for a late-night campus fun
                                run built around a space-exploration concept.
                                The system extended from poster design into
                                event merchandise and supported the event's
                                largest turnout to date at roughly 1,000
                                participants.
                            </p>
                        </div>

                        <div>
                            <h3>
                                Scuba Certifications
                            </h3>

                            <p>
                                Poster design for an open-water diving
                                certification program. A silhouetted diver
                                and school of fish sit within an irregular
                                framing device against a radial blue gradient
                                to communicate depth and immersion.
                            </p>
                        </div>

                        <div>
                            <h3>
                                Spooky Power Pilates
                            </h3>

                            <p>
                                Seasonal fitness flyer using a textured
                                background, gothic-inspired display type, and
                                a silhouetted figure study. A limited
                                black-and-orange palette creates a
                                holiday-specific identity without sacrificing
                                readability.
                            </p>
                        </div>

                    </div>

                </section>


                {/* LOGO & BRAND IDENTITY */}

                <section className="project-section">

                    <p className="section-label">
                        02 — Logo & Brand Identity
                    </p>

                    <h2>
                        Building recognizable identities
                    </h2>

                    <p>
                        Logo work exploring emblem design, custom lettering,
                        illustration, and the relationship between typography
                        and visual marks.
                    </p>

                    <ImageSlider images={logos} />

                    <div className="graphic-project-descriptions">

                        <div>
                            <h3>
                                Knight Riders Motorcycle Club
                            </h3>

                            <p>
                                Emblem-style logo developed for a university
                                motorcycle club. Custom rider illustration,
                                arched typography, ribbon banner, and stars
                                reference vintage badge and patch design
                                conventions.
                            </p>
                        </div>

                        <div>
                            <h3>
                                Band Logo
                            </h3>

                            <p>
                                Abstract mark constructed from interlocking
                                triangular forms and custom inverted
                                lettering. The reversed typography creates a
                                puzzle-like reading experience intended to
                                make the identity distinctive and
                                conversation-starting.
                            </p>
                        </div>

                        <div>
                            <h3>
                                World in Colors
                            </h3>

                            <p>
                                Hand-lettered logotype combining custom script
                                typography with an illustrated dragonfly.
                                The dragonfly wing doubles as the negative
                                space of a "C," connecting the icon and
                                lettering into one mark.
                            </p>
                        </div>

                    </div>

                </section>


                {/* ILLUSTRATION */}

                <section className="project-section project-result">

                    <p className="section-label">
                        03 — Illustration & Concept Work
                    </p>

                    <h2>
                        Florida Man On Tour
                    </h2>

                    <p>
                        A conceptual poster reimagining a viral news headline
                        as a concert tour announcement. Flat vector
                        illustration, a retro color palette, and vintage
                        gig-poster conventions turn the familiar headline
                        format into a satirical concert identity.
                    </p>

                    <ImageSlider images={illustration} />

                </section>


                {/* REFLECTION */}

                <section className="project-section">

                    <p className="section-label">
                        04 — Approach
                    </p>

                    <h2>
                        Designing for different audiences
                    </h2>

                    <p>
                        Across these projects, the visual direction changes
                        substantially depending on the audience, subject, and
                        purpose. The common thread is maintaining clear
                        hierarchy while allowing typography, illustration,
                        composition, and visual language to establish the
                        identity of each piece.
                    </p>

                </section>


                {/* PROJECT NAVIGATION */}

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

export default GraphicDesign;