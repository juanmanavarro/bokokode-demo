'use client';

import { useGetProducts } from "@/components/useRequest";
import CartIcon from "./icons/cart";

export default function Home() {
    const { data, error, isLoading } = useGetProducts();
    const products = data?.data.data;
    const featuredProduct = products?.find((product: any) => product.featured === true);

    return (
        <main className="container">
            <header className="header">
                <h1 className="h1">BEJAMAS_</h1>
                <a href=""><CartIcon /></a>
            </header>
            {isLoading ? <h1>loading</h1> : (
                <section className="fp mt-10">
                    <div className="fp-header">
                        <h2 className="h2">{featuredProduct.name}</h2>
                        <button className="button-black">Add to cart</button>
                    </div>
                    <div className="fp-image">
                        <img src={featuredProduct.image.src} alt={featuredProduct.image.alt} />
                        <div className="caption">Photo of the day</div>
                    </div>
                    <div className="fp-footer">
                        <div className="fp-description">
                            <h4>About the {featuredProduct.name}</h4>
                            <p>{featuredProduct.category}</p>
                            <p>{featuredProduct.description}</p>
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
            )}
        </main>
    )
}
