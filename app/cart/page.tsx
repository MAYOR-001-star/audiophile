"use client"

import CustomButton from '@/components/CustomButton';
import QuantitySelector from '@/components/QuantitySelector';
import { cartItems } from '@/mockupData/data';
import Image from 'next/image';
import React, { useEffect } from 'react'

const Cart = ({ cartOpen, setCartOpen }: { cartOpen?: boolean; setCartOpen?: React.Dispatch<React.SetStateAction<boolean>> }) => {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow || 'unset';
        };
    }, []);

    return (
        <>
            {/* Backdrop overlay under the cart */}
            <div
                onClick={() => setCartOpen?.(false)}
                className="cart-backdrop"
                aria-label="Close cart overlay"
            />

            {/* Cart Modal */}
            <div 
                onClick={(e) => e.stopPropagation()}
                className="cart-modal"
            >
                <div className="cart-header">
                    <h6 className="cart-title">CART(3)</h6>
                    <button
                        type="button"
                        className="cart-remove-all"
                    >
                        Remove all
                    </button>
                </div>

                <div className="cart-items-list">
                    {cartItems.map((items) => {
                        const { id, name, price, quantity, image } = items
                        return (
                            <div key={id} className="cart-item">
                                <div className="cart-item-info">
                                    <div>
                                        <Image src={image} alt={name} width={64} height={64} className="cart-item-image" />
                                    </div>
                                    <div>
                                        <p className="cart-item-name">{name}</p>
                                        <p className="cart-item-price">
                                            $ {price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <QuantitySelector quantity={quantity} />
                            </div>
                        )
                    })}
                </div>

                <div className="cart-total-wrapper">
                    <p className="cart-total-label">Total</p>
                    <h6 className="cart-total-value">$ 5,396</h6>
                </div>

                <CustomButton text="Checkout" variant="primary-btn" className="w-full" />
            </div>
        </>
    )
}

export default Cart