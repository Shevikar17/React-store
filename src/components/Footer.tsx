export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">

                <div className="footer-brand">
                    <span className="footer-logo">Luxe Store</span>
                    <p className="footer-tagline">Premium goods. Uncompromising quality.</p>
                </div>

                <div className="footer-links">
                    <span className="footer-links-label">Company</span>
                    <ul className="footer-links-list">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Licensing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <span>© 2024 Luxe Store. All Rights Reserved.</span>
            </div>
        </footer>
    );
};