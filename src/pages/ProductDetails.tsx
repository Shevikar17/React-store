import { useParams } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useEffect, useState } from 'react';
import type { Product } from "../types/product";

export const ProductDetails = () => {

    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const addItem = useCartStore(state => state.addItem)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load product');
                setLoading(false);
            });
    }, [id])

    if (loading) return <div className="pd-loading">Loading...</div>;
    if (error) return <p className="pd-error">{error}</p>;
    if (!product) return null;

    return (
        <main className="pd-main">
            <div className="pd-grid">

                {/* Left — image */}
                <div className="pd-image-wrap">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="pd-image"
                    />
                </div>

                {/* Right — details */}
                <div className="pd-info">
                    <span className="pd-category">{product.category}</span>
                    <h1 className="pd-title">{product.title}</h1>
                    <p className="pd-description">{product.description}</p>
                    <span className="pd-price">${product.price.toFixed(2)}</span>

                    <div className="pd-divider" />

                    <button
                        onClick={() => addItem(product)}
                        className="pd-add-btn"
                    >
                        Add to Cart
                    </button>
                </div>

            </div>
        </main>
    )
}