import { useState } from "react"
import AddToCart from "./add-to-cart"

export default function Product({ product, height }: { product: any, height?: string }) {
    const [showAddToCard, setShowAddToCart] = useState(false)

    return (
        <div className="product" key={product._id}>
            <div
                className="product__image"
                onMouseOver={() => setShowAddToCart(true)}
                onMouseLeave={() => setShowAddToCart(false)}
                style={{
                    backgroundImage: `url(${product.image.src})`,
                    height: height || '400px',
                }}
            >
                {product.bestseller && <div className="caption">Best seller</div>}
                <AddToCart
                    showAddToCard={showAddToCard}
                    className="product__add"
                    product={product}
                />
            </div>
            <div className="py-2">
                <div className="product__category">
                    {product.category}
                </div>
                <div className="product__name">
                    {product.name}
                </div>
                <div className="product__price">
                    $ {product.price}
                </div>
            </div>
        </div>
    )
}
