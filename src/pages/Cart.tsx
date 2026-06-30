import { useCartStore } from "../store/cartStore";

export const Cart = () => {

    const items = useCartStore(state => state.items)
    const removeItem = useCartStore(state => state.removeItem)
    const updateQuantity = useCartStore(state => state.updateQuantity)
    const total = useCartStore(state => state.total)
    const clearCart = useCartStore(state => state.clearCart)
    const itemCount = useCartStore(state => state.itemCount)

    return (
        <main className="cart-main">
            <h1 className="cart-heading">Your Cart</h1>

            {items.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <div className="cart-grid">

                    {/* Cart Items — left */}
                    <div className="cart-items">
                        {items.map(item => (
                            <div key={item.id} className="cart-item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-info">
                                    <span className="cart-item-category">{item.category}</span>
                                    <h3 className="cart-item-title">{item.title}</h3>
                                    <span className="cart-item-price">${item.price}</span>
                                </div>

                                <div className="cart-item-controls">
                                    <button
                                        className="cart-qty-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        −
                                    </button>
                                    <span className="cart-qty-value">{item.quantity}</span>
                                    <button
                                        className="cart-qty-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className="cart-remove-btn"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary — right */}
                    <div className="cart-summary">
                        <h2 className="cart-summary-heading">Order Summary</h2>

                        <div className="cart-summary-row">
                            <span>Items</span>
                            <span>{itemCount()}</span>
                        </div>

                        <div className="cart-summary-divider" />

                        <div className="cart-summary-total">
                            <span>Total</span>
                            <span>${total().toFixed(2)}</span>
                        </div>

                        <button className="cart-checkout-btn">Checkout</button>
                        <button className="cart-clear-btn" onClick={() => clearCart()}>
                            Clear Cart
                        </button>
                    </div>

                </div>
            )}
        </main>
    )
}