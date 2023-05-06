export default function FeaturedProduct({ product }: { product: any }) {
    return (
        <section className="fp mt-5 md:mt-10">
            <div className="flex justify-between items-center py-2">
                <h2 className="font-bold text-2xl md:text-3xl max-w-md md:max-w-full">{product?.name}</h2>
                <button className="button-black hidden md:block">Add to cart</button>
            </div>
            <div className="fp-image">
                <img src={product?.image.src} alt={product?.image.alt} />
                <div className="caption">Photo of the day</div>
            </div>
            <button className="button-black w-full md:hidden">Add to cart</button>
            <div className="pt-3">
                <div className="">
                    <h4 className="font-bold mb-2 md:text-2xl">About the {product?.name}</h4>
                    <p className="capitalize hidden md:block">{product?.category}</p>
                    <p>{product?.description}</p>
                </div>
                <div className="fp-related">
                    <h4>People also buy</h4>
                    <div className="related-products">
                        <div className="related-product"></div>
                        <div className="related-product"></div>
                        <div className="related-product"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
