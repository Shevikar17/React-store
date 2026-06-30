import { ProductCard } from "../components/ProductCard"
import { useProducts } from "../hooks/useProduct"
import { useState } from 'react';

const CATEGORIES = ['all', "men's clothing", "women's clothing", 'electronics', 'jewelery']

export const Home = () => {

    const [activeCategory, setActiveCategory] = useState('all')

    const { products, loading, error } = useProducts(
        activeCategory === 'all' ? undefined : activeCategory
    )

    return (
        <main>

            {/* Hero Banner */}
            <section className="hero-banner">
                <div className="hero-inner">
                    <span className="hero-overline">New Collection</span>
                    <h1 className="hero-title">
                        Curated for the<br />
                        <strong>Discerning Few</strong>
                    </h1>
                    <p className="hero-sub">Premium goods. Uncompromising quality.</p>
                    <div className="hero-actions">
                        <button className="hero-btn-primary" onClick={() => setActiveCategory('all')}>
                            Shop Now
                        </button>
                        <button className="hero-btn-ghost">
                            View Lookbook
                        </button>
                    </div>
                </div>
            </section>

            {/* Shop Section */}
            <section className="shop-section">

                <div className="category-bar">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`category-chip ${activeCategory === cat ? 'category-chip--active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {loading && (
                    <div className="product-grid">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="skeleton-card" />
                        ))}
                    </div>
                )}

                {error && <p className="shop-error">{error}</p>}

                {!loading && !error && (
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>

        </main>
    )
}