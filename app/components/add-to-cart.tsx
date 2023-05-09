export default function AddToCart({ showAddToCard = true, className }: { showAddToCard?: boolean, className?: string }) {
    return (
        <button className={`button-black ${className} ${showAddToCard ? 'block' : 'hidden'}`}>
            Add to cart
        </button>
    )
}
