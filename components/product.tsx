export default function Product({ product, height }: { product: any, height?: string }) {
    return (
        <div className="max-w-full" key={product._id}>
            <div
                className="w-full h-full max-w-full"
                style={{
                    backgroundImage: `url(${product.image.src})`,
                    height: height || '400px',
                    width: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>
            <div className="py-2">
                <div className="capitalize text-sm text-gray-500">{product.category}</div>
                <div className="truncate text-ellipsis overflow-hidden font-bold">{product.name}</div>
                <div className="text-gray-500">$ {product.price}</div>
            </div>
        </div>
    )
}
