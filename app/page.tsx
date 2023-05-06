'use client';

import { useGetProducts } from "@/components/useRequest";
import CartIcon from "./icons/cart";
import { useState } from "react";
import FeaturedProduct from "@/components/featured-product";
import Products from "@/components/products";

export default function Home() {
    const [pageIndex, setPageIndex] = useState(0);
    const { data, error, isLoading } = useGetProducts(pageIndex);
    const products = data?.data.data;
    const featuredProduct = products?.find((product: any) => product.featured === true);
    const paginationLinks = data?.data.links;

    return (
        <main className="container">
            <header className="header">
                <h1 className="h1">BEJAMAS_</h1>
                <a href=""><CartIcon /></a>
            </header>
            {isLoading ? <h1>loading</h1> : (
                <>
                    <FeaturedProduct product={featuredProduct} />
                    <Products
                        products={products}
                        paginationLinks={paginationLinks}
                        setPageIndex={setPageIndex}
                    />
                </>
            )}
        </main>
    )
}
