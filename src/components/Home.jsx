//import RoleSelector from './RoleSelector';
//import PreservMockup from './PreservMockup';
/*
 * HOME PAGE — ACTION PLAN
 *
 * PURPOSE:
 * Establish who I am, what I do, and what makes my approach different.
 * The homepage should immediately communicate "maker," while clearly
 * connecting my multidisciplinary background to web design and development.
 * ROLE SELECTOR:
 * - Keep the "I'm looking for..." selector concept
 * - Roles: Graphic Designer, Web Designer, Front-end Developer
 * - Selecting a role should change the content displayed below
 * - Each role should have:
 *      - Relevant title
 *      - Short description
 *      - Relevant project images
 *      - CTA leading to appropriate work
 * - Make sure the interaction works on mobile and with keyboard navigation
 *
 * ROLE CONTENT:
 * Graphic Designer → Visual Design & Branding
 * Web Designer → Interface Design & Development
 * Front-end Developer → Bringing Ideas to Life with Code
 *
 * PROJECT CONNECTION:
 * - Use actual portfolio projects rather than generic placeholder imagery
 * - Graphic Design → relevant visual/design work
 * - Web Design → relevant UI/UX projects
 * - Front-end → relevant coded projects
 * - Make the selected work reinforce the selected role
 *
 * VISUAL / UX:
 * - Strong visual hierarchy
 * - Keep the hero clean and memorable
 * - Use project imagery to add visual interest
 * - Keep animations subtle and intentional
 * - Don't let the selector overshadow the portfolio itself
 *
 * OVERALL GOAL:
 * The visitor should understand within seconds:
 *
 *      Who is Anthony?
 *      What does he do?
 *      What makes his approach different?
 *      What can he actually make?
 *
 * HOME → PROJECTS → CASE STUDIES → ABOUT → CONTACT
 *
 * The homepage introduces the story.
 * The Projects page proves it.
 * The Case Studies explain it.
 * The About page gives it context.
 * The Contact page starts the conversation.
 */
import { useState } from "react";
import evillarry from "../assets/evillarry.png";

function Home() {
    const [role, setRole] = useState('Web Designer');

    const pickRole = {
        "Graphic Designer": {
            title: "Visual Design & Branding",
            images: [
                evillarry
            ]

        },
        "Web Designer": {
            title: "Interface Design & Development",
            images: [
                evillarry
            ]
        },
        "Front-end Developer": {
            title: "Bringing Ideas to Life with Code",
            images: [
                evillarry
            ]
        }
    }
    return (
        <section id="home">
            <div className="container">
                <div className="grid-item-intro">
                    <p>Hi, I'm <strong>Anthony</strong>. I'm a <strong>maker</strong>.</p>
                    <p> <strong>A generalist</strong> by design, <strong>specialist</strong> by practice.</p>

                    <p>Honed fluency across <strong>visual design</strong> and <strong>front-end development</strong> supported by background in CAD and 3D modeling.</p>

                    <p>The <strong>best solutions</strong> rarely stay in one lane - they exist <strong>where disciplines</strong> intersect.</p>
                </div>
                <div className="grid-item-role-selector">
                    I'm looking for ... <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>Graphic Designer</option>
                        <option>Web Designer</option>
                        <option>Front-end Developer</option>
                    </select>
                    <div>
                        <h3>{pickRole[role].title}</h3>
                        <div className="role-images">
                            {pickRole[role].images.map((image, index) => (
                                <img key={index} src={image} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;