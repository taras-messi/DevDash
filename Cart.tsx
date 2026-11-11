import React, { JSX,useState } from "react";
import { CartItem } from "./product";
import {CheckoutForm } from "./CheckoutFom";

interface CartProps {
    items: CartItem[];
    onUpdateQuantity: (id: number, delta: number)=> void;
    onRemoveItem: (id:number)=> void;
    onClearCart: ()=> void;
}

export function Cart({items, onUpdateQuantity, onRemoveItem, onClearCart}: CartProps): JSX.Element {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleOrdersubmit = (formData:{ name: string; phone: string; address: string}) =>{
        alert(`Order submitted:\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}`);
        setIsCheckingOut(false);
        onClearCart();
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-6 border
        border-gray-100 dark:border-gray-800 my-6">
            <h2 className="text-2xl font-extrabokd
            text-gray-900 dark:text-white mb-6">
                Shopping Cart
            </h2>

            {items.length === 0 ? (
                <p className="text-center py-12
                text-gray-400 dark:text-gray-500 text-base">
                    Your cart is empty.
                </p>
                ) :isCheckingOut ? (<CheckoutForm onSubmitOrder={handleOrdersubmit}
                onCancel={() => setIsCheckingOut(false)} />) : (
                    <div className="flex flex-col justify-beween">
                        <ul className="space-y-4 max-h-96 overflow-y-auto pr-1">
                            {items.map((item) => (
                                <li key={item.id} className="flex items-center
                                justify-between bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border
                                border-gray-100 dark:border-gray-800 gap-3">
                                    <span className="font-bold text-gray-900 text-base flex-1">
                                        {item.title}
                                    </span>
                                    <div className="fex items-center border border-gray-200
                                    dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800
                                    ">
                                        <button className="px-2.5 py-1
                                        text-gray-600 dark:text-gray-300
                                        hover:bg-gray-100 dark:hover:bg-gray-700
                                        transtion"
                                        onClick={() => onUpdateQuantity(item.id,-1  )}>
                                            -
                                        </button>
                                        <span className="px-3 text-sm font-bold text-gray-800
                                        dark:text-gray-100">{item.quantity}</span>
                                        <button className="px-2.5 py-1
                                        text-gray-600 dark:text-gray-300
                                        hover:bg-gray-100 dark:hover:bg-gray-700
                                        transtion"
                                        onClick={() => onUpdateQuantity(item.id, 1)}>
                                            +
                                        </button>

                                    </div>
                                    <span className="font-extrabokd text-gray-900 dark:text-yellow-400 text-sm
                                    min-w-[55px] text-right">
                                        {(item.price*item.quantity).toFixed(2)} $
                                    </span>
                                    <button className="text-red-500 hover:text-red-700 text-xs font-
                                    medium transition ml-1"
                                    onClick={() => onRemoveItem(item.id)}>
                                        Remove
                                    </button>

                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center
                        justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-800
                        text-lg">
                            <span className="text-gray-600 dark:text-gray-400 font-medium">
                                Total:
                            </span>
                            <strong className="font-extrabold text-gray-900 dark:text-white">
                                {totalPrice.toFixed(2)} $
                            </strong>
                        </div>

                        <button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray
                        -900 font-bold py-3.5 px-6 rounded-2xl transition-all
                        duration-200 shadow-md hover:shadow-lg
                        active:scale-[0.99]"
                        onClick={() => setIsCheckingOut(true)}>
                            Proceed to Checkout
                        </button>
                    </div>
                )}
        </div>
    )
    }