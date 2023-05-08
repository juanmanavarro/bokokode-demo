import { useState } from "react";

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
                <button className={`button-black truncate w-full absolute inset-x-0 bottom-0 ${showAddToCard ? 'block' : 'hidden'}`}>
                    Add to cart
                </button>
            </div>
            <div className="py-2">
                <div className="capitalize text-sm text-gray-500">{product.category}</div>
                <div className="truncate text-ellipsis overflow-hidden font-bold">{product.name}</div>
                <div className="text-gray-500">$ {product.price}</div>
            </div>
        </div>
    )
}
