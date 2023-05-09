import { useContext } from "react"
import { CartData } from "../context/cart"

export default function AddToCart({ showAddToCard = true, className, product }: { showAddToCard?: boolean, className?: string, product: any }) {
    const { cart, setCart } = useContext<any>(CartData)

    const updateCart = (product: any) => {
        // TODO update quantity if product already exists in cart
        setCart([ ...cart, { ...product, quantity: 1 }])
    }

    return (
        <button
            className={`button-black ${className} ${showAddToCard ? 'block' : 'hidden'}`}
            onClick={() => updateCart(product)}
        >
            Add to cart
        </button>
    )
}
