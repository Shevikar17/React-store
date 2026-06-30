import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export const Navbar = () => {
    const itemCount = useCartStore(state => state.itemCount());

    return (
        <nav className="navbar">
            <div className="navbar-inner">

                <Link to="/" className="navbar-logo">
                    LUXE STORE
                </Link>

                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Shop</Link>

                    <Link to="/cart" className="navbar-cart">
                        Cart
                        {itemCount > 0 && (
                            <span className="navbar-cart-badge">{itemCount}</span>
                        )}
                    </Link>
                </div>

            </div>
        </nav>
    );
};