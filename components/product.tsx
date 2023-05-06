export default function Product({ product, height }: { product: any, height?: string }) {
    return (
        <div className="product" key={product._id}>
            <div
                className="w-full h-full"
                style={{
                    backgroundImage: `url(${product.image.src})`,
                    height,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>
            <div className="product-footer py-2">
                <div className="capitalize text-sm text-gray-500">{product.category}</div>
                <div className="truncate text-ellipsis overflow-hidden font-bold">{product.name}</div>
                <div className="product-price text-gray-500">$ {product.price}</div>
            </div>
        </div>
    )
}
