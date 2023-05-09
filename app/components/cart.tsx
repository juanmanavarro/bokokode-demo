import { useContext } from "react"
import CartIcon from "../assets/icons/cart"
import { CartData } from "../context/cart"

export default function Cart() {
    const { cart } = useContext<any>(CartData)

    return (
        <div>
            <div className="flex justify-center items-center">
                <CartIcon />
                <span className="inline-block ms-2 inline-block">{cart.length}</span>
            </div>
        </div>
    )
}
