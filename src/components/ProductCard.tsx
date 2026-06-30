import { Link } from "react-router-dom";
import type { Product } from "../types/product";

interface Props {
    product: Product
}

export const ProductCard = ({ product }: Props) => {
    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-card-image-link">
                <img
                    className="product-card-image"
                    src={product.image}
                    alt={product.title}
                />
            </Link>

            <div className="product-card-body">
                <span className="product-card-category">{product.category}</span>
                <p className="product-card-title">{product.title}</p>
                <p className="product-card-description">{product.description}</p>
                <span className="product-card-price">${product.price}</span>

                <Link to={`/product/${product.id}`} className="product-card-link">
                    View Product
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};