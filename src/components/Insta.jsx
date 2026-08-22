import { useEffect } from "react";

function InstagramPost() {
    useEffect(() => {
        const processInstagram = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        const existingScript = document.querySelector(
            'script[src="https://www.instagram.com/embed.js"]'
        );

        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            script.onload = processInstagram;
            document.body.appendChild(script);
        } else {
            processInstagram();
        }
    }, []);

    return (
        <div className="instagram-embed-wrapper">
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/DBOnmklRLrZ/"
                data-instgrm-version="14"
            >
                <a
                    href="https://www.instagram.com/p/DBOnmklRLrZ/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View this post on Instagram
                </a>
            </blockquote>
        </div>
    );
}

export default InstagramPost;