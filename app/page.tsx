'use client'

import { useGetProducts } from "@/components/useRequest"
import CartIcon from "@/app/assets/icons/cart"
import { useState } from "react"
import FeaturedProduct from "@/components/featured-product"
import Products from "@/components/products"

export default function Home() {
    const [pageIndex, setPageIndex] = useState(0)
    const { data, isLoading } = useGetProducts(pageIndex)
    const products = data?.data.data
    const featuredProduct = products?.find((product: any) => product.featured === true)
    const paginationLinks = data?.data.links

    return (
        <main className="container">
            <header className="header">
                <p className="logo">BEJAMAS_</p>
                <a href=""><CartIcon /></a>
            </header>
            {isLoading ? <h1>loading</h1> : (
                <>
                    {featuredProduct && <FeaturedProduct product={featuredProduct} />}
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
