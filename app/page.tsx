'use client';

import { useGetProducts } from "@/components/useRequest";
import CartIcon from "./icons/cart";

export default function Home() {
    const { data, error, isLoading } = useGetProducts();

    return (
        <main className="container">
            <header className="header">
                <h1 className="h1">BEJAMAS_</h1>
                <a href=""><CartIcon /></a>
            </header>
            {isLoading ? <h1>loading</h1> : (
                <section className="main-product mt-5">
                    <div className="main-product-header">
                        <h2 className="h2">{data.data.data[0].name}</h2>
                        <button className="button-black">Add to cart</button>
                    </div>
                </section>
            )}
        </main>
    )
}
