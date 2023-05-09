'use client'

import CartIcon from "@/app/assets/icons/cart"
import FeaturedProduct from "@/app/components/featured-product"
import Products from "@/app/components/products"
import { useFetchProducts } from "./hooks/useApi"
import { useEffect, useState } from "react"
import SpinnerIcon from "./assets/icons/spinner"

export default function Home() {
    const [featuredProduct, setFeaturedProduct] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        useFetchProducts({})
            .then(res => {
                const featured = res?.data.data
                    .find((product: any) => product.featured === true);
                setFeaturedProduct(featured)
                setLoading(false)
            })
    }, [])

    if ( loading ) {
        return (
            <main className="container h-screen flex justify-center items-center">
                <SpinnerIcon />
            </main>
        )
    }

    return (
        <main className="container">
            <header className="header">
                <p className="logo">BEJAMAS_</p>
                <a href=""><CartIcon /></a>
            </header>
            <FeaturedProduct product={featuredProduct} />
            <Products />
        </main>
    )
}
