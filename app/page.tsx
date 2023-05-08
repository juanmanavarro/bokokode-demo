'use client'

import { useGetProducts } from "@/components/useRequest"
import CartIcon from "@/app/assets/icons/cart"
import FeaturedProduct from "@/components/featured-product"
import Products from "@/components/products"

export default function Home() {
    const { data, isLoading } = useGetProducts()
    const featuredProduct = data?.data.data.find((product: any) => product.featured === true)

    return (
        <main className="container">
            <header className="header">
                <p className="logo">BEJAMAS_</p>
                <a href=""><CartIcon /></a>
            </header>
            {isLoading ? <h1>loading</h1> : (
                <>
                    {featuredProduct && <FeaturedProduct product={featuredProduct} />}
                    <Products />
                </>
            )}
        </main>
    )
}
