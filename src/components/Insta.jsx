import { useEffect } from "react";

function InstagramPost() {
    useEffect(() => {
        // Load Instagram's embed script once
        if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        } else if (window.instgrm) {
            window.instgrm.Embeds.process();
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