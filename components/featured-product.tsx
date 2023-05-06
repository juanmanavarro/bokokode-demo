export default function FeaturedProduct({ product }: { product: any }) {
    return (
        <section className="fp mt-10">
            <div className="fp-header">
                <h2 className="h2">{product?.name}</h2>
                <button className="button-black">Add to cart</button>
            </div>
            <div className="fp-image">
                <img src={product?.image.src} alt={product?.image.alt} />
                <div className="caption">Photo of the day</div>
            </div>
            <div className="fp-footer">
                <div className="fp-description">
                    <h4>About the {product?.name}</h4>
                    <p>{product?.category}</p>
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
