function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <p className="footer-meta">
                SCALE 1:1 &nbsp;·&nbsp; DRAWN BY A. ZARCZYNSKI &nbsp;·&nbsp; JACKSONVILLE, FL
            </p>
            <p className="footer-copyright">
                &copy; {year} Anthony Zarczynski. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;