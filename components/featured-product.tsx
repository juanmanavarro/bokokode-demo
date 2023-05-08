import Product from "./product";

export default function FeaturedProduct({ product }: { product: any }) {
    return (
        <section className="fp mt-5 md:mt-10 border-b-4 pb-10 mb-10">
            <div className="flex justify-between items-center py-2">
                <h2 className="font-bold text-2xl md:text-3xl max-w-md md:max-w-full">{product?.name}</h2>
                <button className="button-black hidden md:block">Add to cart</button>
            </div>
            <div className="fp-image">
                <img src={product?.image.src} alt={product?.image.alt} />
                <div className="caption">Photo of the day</div>
            </div>
            <button className="button-black w-full md:hidden">Add to cart</button>
            <div className="pt-3 md:flex">
                <div className="">
                    <h4 className="font-bold mb-2 md:text-2xl">About the {product?.name}</h4>
                    <p className="capitalize hidden md:block">{product?.category}</p>
                    <p>{product?.description}</p>
                </div>
                <div className="md:w-2/5 md:ms-3">
                    <h4 className="font-bold text-xl mb-3 mt-5 md:mt-0">People also buy</h4>
                    <div className="grid grid-cols-3 gap-2">
                        {product?.people_also_buy.map((related: any) => (
                            <div className="related-product" key={related._id}>
                                <Product product={related} height="200px" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
