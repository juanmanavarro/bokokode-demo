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
                <section className="featured-product mt-10">
                    <div className="featured-product-header">
                        <h2 className="h2">{featuredProduct.name}</h2>
                        <button className="button-black">Add to cart</button>
                    </div>
                    <div className="featured-product-image">
                        <img src={featuredProduct.image.src} alt={featuredProduct.image.alt} />
                        <div className="caption">Photo of the day</div>
                    </div>
                </section>
            )}
        </main>
    )
}
