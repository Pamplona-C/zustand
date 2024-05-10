import { userCartstore } from "../store/Cartstore"

export const AvailableProducts = () => {
    
    const [items, addToCart] = userCartstore(state => [state.availableItems, state.addToCart])
    
    return(
        <div>
            <h1>Choose a product</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - R${item.price}
                        <button onClick={() => {addToCart(item)}}>
                            add to cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}