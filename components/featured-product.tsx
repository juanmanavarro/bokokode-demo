import Product from "./product";

export default function FeaturedProduct({ product }: { product: any }) {
    return (
        <section className="fp mt-5 md:mt-10 border-b-4 pb-10 mb-10">
            <div className="flex justify-between items-center py-4">
                <h1 className="title-1 max-w-md md:max-w-full">
                    {product?.name}
                </h1>
                <button className="button-black hidden md:block">Add to cart</button>
            </div>
            <div className="fp-image relative mb-5 w-full">
                <img className="w-full" src={product?.image.src} alt={product?.image.alt} />
                <div className="caption bottom-0">Photo of the day</div>
            </div>
            <button className="button-black w-full md:hidden mb-5">Add to cart</button>
            <div className="pt-3 md:flex">
                <div>
                    <h4 className="title-2 mb-2 md:text-2xl mb-5">About the {product?.name}</h4>
                    <p className="capitalize hidden md:block">{product?.category}</p>
                    <p>{product?.description}</p>
                </div>
                <div className="md:w-2/5 md:ms-3">
                    <h4 className="title-3 mb-3 mt-5 md:mt-0 mb-5">People also buy</h4>
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
