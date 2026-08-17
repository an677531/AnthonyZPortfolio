/*
 * ABOUT PAGE — ACTION PLAN
 *
 * PURPOSE:
 * Give visitors a deeper understanding of who I am, my professional
 * background, my multidisciplinary skill set, and the perspective I bring
 * to design and development.
 *
 * STRUCTURE:
 *
 * 1. INTRODUCTION
 * - Introduce myself as a maker
 * - Briefly explain my approach to design + technology
 * - Reinforce "Generalist by design, specialist by practice"
 *
 * 2. WHAT I DO
 * - Explain my primary professional focus
 * - Emphasize frontend development + visual/UI design
 * - Keep this more about capabilities and approach than a giant tech list
 *
 * 3. PROFESSIONAL EXPERIENCE
 * - UCF OPS Web Designer
 * - UCF Graphic Design Assistant
 * - Explain what I actually did and what these experiences taught me
 * - Emphasize experience working across both design and development
 *
 * 4. CAPABILITIES / SKILLS
 * Organize skills into clear categories rather than one long list:
 *
 * Web:
 * - HTML
 * - CSS
 * - JavaScript
 * - React
 * - WordPress
 *
 * Design:
 * - UI/UX
 * - Visual Design
 * - Responsive Design
 * - Wireframing
 * - Prototyping
 * - Figma
 *
 * 3D / Technical:
 * - CAD
 * - 3D Modeling
 * - Architectural Visualization
 * - Maya
 * - AutoCAD
 * - Revit
 * - Inventor
 * - Fusion 360
 *
 * Only include skills I can confidently discuss or demonstrate.
 *
 * 5. BEYOND THE WEB
 * - Explain my CAD, 3D, architectural visualization, and broader
 *   technical background
 * - Show how these experiences influence the way I approach digital work
 *
 * 6. OUTSIDE OF WORK
 * - Give visitors a glimpse of Anthony the person
 * - Art
 * - Writing / worldbuilding
 * - Books, films, games
 * - Cooking
 * - Plants
 * - Curiosity / taking things apart / learning
 *
 * 7. PERSONAL MEDIA
 * Add optional interactive/personal components:
 * - Photos component: cat, plants, artwork, places, interesting things, etc.
 * - Personal artwork / Instagram
 * - Currently listening / Spotify
 *
 * These should support the "maker" identity without distracting from the
 * professional content.
 *
 * 8. CLOSING STATEMENT
 * - Return to the core philosophy of the portfolio
 * - Reinforce the idea that strong solutions emerge where disciplines
 *   intersect
 *
 * CONTENT GUIDELINES:
 * - Avoid repeating the same information from the Home page
 * - Home = quick introduction and positioning
 * - About = deeper context and background
 * - Projects = proof of ability
 * - Case Studies = process and problem-solving
 * - Contact = opportunity to connect
 *
 * UX / VISUAL:
 * - Do not present the About page as one giant wall of text
 * - Break the content into visually distinct sections
 * - Use typography, spacing, images, and components to create hierarchy
 * - Make the page easy to scan while still rewarding deeper reading
 * - Keep personal content visually interesting but secondary to professional
 *   experience
 *
 * OVERALL GOAL:
 * By the end of the About page, the visitor should understand:
 *
 *      Who is Anthony?
 *      What does he do?
 *      What experience does he have?
 *      What skills does he bring?
 *      What makes his perspective different?
 *      What is he like as a person?
 *
 * The page should make the "maker" identity feel genuine by showing the
 * breadth of experiences behind it, rather than simply claiming to be
 * multidisciplinary.
 */
import Photos from './Photos.jsx';
import InstagramPost from "./Insta.jsx";
function About() {
    return (
        <section id="about">
            <div className="container">

                <div className="about-intro">
                    <div className="about-intro-text">
                        <p className="bio-top">
                            Hi, I'm <strong>Anthony</strong>. I'm a <strong>maker</strong>.
                        </p>

                        <p>
                            The most compelling digital experiences are built where{' '}
                            <strong>creativity</strong> and <strong>technology</strong> converge.
                        </p>

                        <p>
                            I'm a <strong>Digital Media</strong> graduate from the University
                            of Central Florida with a multidisciplinary background spanning{' '}
                            <strong>front-end development</strong>, <strong>visual design</strong>,
                            and digital media.
                        </p>
                    </div>

                </div>

                <div className="about-section">
                    <h2>What I Do</h2>

                    <p>
                        My practice centers on modern front-end development using{' '}
                        <strong>HTML</strong>, <strong>CSS</strong>,{' '}
                        <strong>JavaScript</strong>, <strong>React</strong>, and{' '}
                        <strong>WordPress</strong>, supported by experience in UI/UX,
                        responsive design, and visual communication.
                    </p>

                    <p>
                        I enjoy translating ideas into interfaces that balance
                        functionality with clarity, where every design decision
                        serves a purpose and every line of code contributes to a
                        better user experience.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Experience</h2>

                    <p>
                        My professional experience at the University of Central Florida
                        includes developing and maintaining production WordPress websites
                        as an <strong>OPS Web Designer</strong>, while also contributing
                        to campus-wide marketing initiatives as a{' '}
                        <strong>Graphic Design Assistant</strong>.
                    </p>

                    <p>
                        Working across development and design has reinforced my appreciation
                        for both sides of the process: creating systems that are technically
                        sound while ensuring every interaction feels intentional,
                        intuitive, and accessible.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Beyond the Web</h2>

                    <p>
                        My technical background extends beyond web technologies. I've
                        developed experience in <strong>CAD</strong>, architectural
                        visualization, and <strong>3D modeling</strong> through Autodesk
                        Maya, AutoCAD, Revit, Inventor, and Fusion 360.
                    </p>

                    <p>
                        Working across physical and digital mediums has taught me to think
                        spatially, iterate deliberately, and approach challenges from
                        multiple perspectives.
                    </p>
                </div>

                <div className="about-section about-personal">
                    <h2>Outside of Work</h2>
                    <div className="about-photos">
                        <Photos />
                    </div>
                    <p>
                        Curiosity remains the common thread. I create traditional and
                        digital artwork, write and illustrate original fantasy worlds,
                        explore storytelling through books, films, and games, and enjoy
                        learning through cooking, caring for plants, and taking things
                        apart to understand how they work.
                    </p>

                    <div className="personal-links">
                        <InstagramPost />
                        <iframe
                            src="https://open.spotify.com/embed/playlist/4C2qVH8VGoXAIhihzob5ib?utm_source=generator&si=0caf23cc268e4f6b" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>

                <div className="about-closing">
                    <p>
                        The <strong>best solutions</strong> rarely stay in one lane.
                        They exist where <strong>disciplines intersect</strong>, where
                        thoughtful design supports solid engineering, and where curiosity
                        becomes the foundation for meaningful work.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;