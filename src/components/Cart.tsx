import { userCartstore } from "../store/Cartstore"

export const Cart = () => {
    
    const [items, removeFromCart] = userCartstore(state => [state.cart, state.removeFromCart])
    
    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - R${item.price}
                        <button onClick={() => {removeFromCart(item.id)}}>
                            remove cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}