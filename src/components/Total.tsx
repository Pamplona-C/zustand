import { userCartstore } from "../store/Cartstore"

export const Total = () => {
    
    const items = userCartstore(state => state.cart);

    const sum = items.reduce((acc, item) => acc + item.price, 0);

    const formatter = new Intl.NumberFormat("pt-Br",{
        style: "currency",
        currency: "BRL",
    });
    
    return(
        <div>
            <h1>Total {formatter.format(sum)}</h1>
        </div>
    )
}