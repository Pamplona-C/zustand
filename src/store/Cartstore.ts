import {create} from 'zustand';

const initialItems = [
    { id: "1", name: "Camiseta", price: 29.99 },
    { id: "2", name: "Calça jeans", price: 49.99 },
    { id: "3", name: "Tênis", price: 79.99 },
    { id: "4", name: "Boné", price: 14.99 },
    { id: "5", name: "Cachaça", price: 25.99},
];


type Item = {
    id: string;
    name : string;
    price: number;
}


type CartStore = {
    availableItems: Item[];
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart: (id: string) => void;
}

export const userCartstore = create<CartStore>((set) => {
    return {
        cart: [],
        availableItems:initialItems,
        addToCart: (item) => set((state) => ({cart: [...state.cart, item]})),
        removeFromCart: (id) => set((state) => ({cart: state.cart.filter((item) => item.id != id)}))
    }
});