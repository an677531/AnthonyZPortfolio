import { useState, useEffect } from "react";
import evillarry from "../assets/1.png";
import evilgary from "../assets/2.jpg";
import evilharry from "../assets/3.jpg";

function Photos() {
    const photos = [evillarry, evilgary, evilharry, evilgary];
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((current) => (current + 1) % photos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [photos.length]);

    return (
        <section id="photos">
            <div className="photo-frame">
                <img key={currentPhoto} src={photos[currentPhoto]} alt="" className="photo-frame-img" />

                <div className="widget-badge">
                    <span>AZ</span>
                </div>

                <div className="widget-toolbar">
                    {photos.map((_, i) => (
                        <button
                            key={i}
                            className={`switch ${i === currentPhoto ? "active" : ""}`}
                            onClick={() => setCurrentPhoto(i)}
                            aria-label={`Photo ${i + 1}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Photos;