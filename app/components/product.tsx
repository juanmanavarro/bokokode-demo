import { useState } from "react";
import AddToCart from "./add-to-cart";

export default function Product({ product, height }: { product: any, height?: string }) {
    const [showAddToCard, setShowAddToCart] = useState(false);

    return (
        <div className="max-w-full" key={product._id}>
            <div
                className="w-full h-full max-w-full relative"
                onMouseOver={(e) => setShowAddToCart(true)}
                onMouseLeave={(e) => setShowAddToCart(false)}
                style={{
                    backgroundImage: `url(${product.image.src})`,
                    height: height || '400px',
                    width: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {product.bestseller && <div className="caption">Best seller</div>}
                <AddToCart
                    showAddToCard={showAddToCard}
                    className="truncate w-full absolute inset-x-0 bottom-0"
                />
            </div>
            <div className="py-2">
                <div className="capitalize text-sm text-gray-500">{product.category}</div>
                <div className="truncate text-ellipsis overflow-hidden title-4">{product.name}</div>
                <div className="text-gray-500">$ {product.price}</div>
            </div>
        </div>
    )
}
