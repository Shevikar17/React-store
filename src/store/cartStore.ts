import type { CartItem, Product } from '../types/product';
import { create } from 'zustand';

interface CartStore {
    items: CartItem[];
    addItem:(product: Product) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id:number, quantity: number) => void;
    clearCart: () => void;
    total: () => number;
    itemCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({

    items: [],

    addItem: (product) => {
        const existing = get().items.find( item => item.id === product.id);

        if(existing) {
            set(state => ({
                items: state.items.map(item =>
                    item.id === product.id
                    ? { ...item, quantity: item.quantity +1 }
                    :item
                )
            }))
        } else {
            set(state => ({ items: [...state.items, {...product, quantity: 1}] }))
        }
    },

    removeItem: (id) => {
        set(state => ({ items: state.items.filter(item => item.id !== id) }));
    },

    updateQuantity: (id, quantity) => {

        if( quantity < 1 ) return
        
        set(state => ({
            items: state.items.map(item => 
                item.id === id 
                ? { ...item, quantity } 
                : item
            )
        }))

    },

    clearCart: () => set({ items: [] }),

    total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

    itemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

}));