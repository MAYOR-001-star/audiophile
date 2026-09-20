"use client"

import CustomInput from '@/components/CustomInput'
import React, { useState } from 'react'
import { cartItems } from '@/mockupData/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CustomButton from '@/components/CustomButton'


const Checkout = () => {
    const router = useRouter()
    const [showOrderModal, setShowOrderModal] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState<'e-money' | 'cash'>('e-money')

    return (
        <section className='px-[1.5rem] md:px-[2.5rem] lg:px-[10.31rem] pt-[1.5rem] md:pt-[2.5rem] lg:pt-[4.94rem] pb-[4rem] md:pb-[6rem] lg:pb-[8.84rem] bg-[var(--muted-high-white)] min-h-screen'>
            {/* Go Back */}
            <button
                type="button"
                onClick={() => router.back()}
                className="product-back-link-text cursor-pointer mb-[1.5rem] md:mb-[2.38rem] block text-[0.94rem] leading-[1.56] hover:text-[var(--primary)] transition-colors"
            >
                Go Back
            </button>

            <div className='flex flex-col lg:flex-row justify-between items-start gap-[2rem] lg:gap-[1.88rem]'>
                {/* Checkout Form */}
                <div className='bg-white rounded-[0.5rem] p-[1.5rem] sm:p-[2rem] md:p-[3rem] flex-1 w-full lg:max-w-[45.63rem]'>
                    <h3 className='uppercase text-[1.75rem] md:text-[2rem] font-bold tracking-[var(--letter-spacing2)]'>checkout</h3>

                    {/* Billing Details */}
                    <div>
                        <p className='subtitle mt-[2rem] md:mt-[2.56rem] mb-[1rem] text-[var(--primary)] uppercase'>Billing Details</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[1rem]'>
                            <CustomInput label="Name" type="text" name="name" required={true} placeholder='Alexei Ward' />
                            <CustomInput label="Email" type="email" name="email" required={true} placeholder='alexei@mail.com' />
                            <div className='md:col-span-1'>
                                <CustomInput label="Phone" type="tel" name="phone" required={true} placeholder='+1 202-555-0136' />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Info */}
                    <div className='mt-[2rem] md:mt-[3.31rem]'>
                        <p className='subtitle mb-[1rem] text-[var(--primary)] uppercase'>shipping info</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[1rem]'>
                            <div className='md:col-span-2'>
                                <CustomInput label="Address" type="text" name="address" required={true} placeholder='1137 Douglasdale Road' />
                            </div>
                            <CustomInput label="Zip Code" type="number" name="zip-code" required={true} placeholder='10001' />
                            <CustomInput label="City" type="text" name="city" required={true} placeholder='New York' />
                            <div className='md:col-span-1'>
                                <CustomInput label="Country" type="text" name="country" required={true} placeholder='United States' />
                            </div>
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div className='mt-[2rem] md:mt-[3.81rem]'>
                        <p className='subtitle mb-[1rem] text-[var(--primary)] uppercase'>payment details</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[1rem] items-start mb-[1rem]'>
                            <p className='label mt-[0.56rem] mb-[0.5rem] md:mb-0'>Payment Method</p>
                            <div className='flex flex-col'>
                                <CustomInput
                                    label="e-Money"
                                    type="radio"
                                    name="payment-method"
                                    value="e-money"
                                    checked={paymentMethod === 'e-money'}
                                    onChange={() => setPaymentMethod('e-money')}
                                />
                                <CustomInput
                                    label="Cash on Delivery"
                                    type="radio"
                                    name="payment-method"
                                    value="cash"
                                    checked={paymentMethod === 'cash'}
                                    onChange={() => setPaymentMethod('cash')}
                                />
                            </div>
                        </div>

                        {paymentMethod === 'e-money' ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[1rem]'>
                                <CustomInput label="e-Money Number" type="number" name="e-money-number" required={true} placeholder='238521993' />
                                <CustomInput label="e-Money PIN" type="number" name="e-money-pin" required={true} placeholder='6891' />
                            </div>
                        ) : (
                            <div className='my-[1.5rem] p-[1.5rem] bg-[#F1F1F1] rounded-[0.5rem] text-[0.94rem] leading-[1.56] text-[var(--muted-low-white)]'>
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                            </div>
                        )}
                    </div>
                </div>

                {/* Summary Card */}
                <div className="bg-white rounded-[0.5rem] p-[1.5rem] sm:p-[2rem] w-full lg:w-[21.88rem] lg:shrink-0">
                    <h6 className="uppercase font-bold tracking-[var(--letter-spacing2)] mb-[2rem]">summary</h6>

                    <div className="space-y-[1.5rem] mb-[2rem]">
                        {cartItems.map((item) => {
                            const { id, name, price, quantity, image } = item
                            return (
                                <div key={id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-[1rem]">
                                        <Image
                                            src={image}
                                            alt={name}
                                            width={64}
                                            height={64}
                                            className="rounded-[0.5rem] shrink-0"
                                        />
                                        <div>
                                            <p className="font-bold text-[0.94rem] leading-tight text-black">{name}</p>
                                            <p className="font-bold text-[0.88rem] uppercase text-[var(--muted-low-white)] mt-[0.25rem]">
                                                $ {price.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-[0.94rem] text-[var(--muted-low-white)]">
                                        x{quantity}
                                    </span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="space-y-[0.5rem] mb-[2rem]">
                        <div className="flex justify-between items-center">
                            <span className="text-[var(--muted-low-white)] uppercase text-[0.94rem]">TOTAL</span>
                            <h6 className="font-bold text-[1.13rem] text-black">$ 5,396</h6>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[var(--muted-low-white)] uppercase text-[0.94rem]">SHIPPING</span>
                            <h6 className="font-bold text-[1.13rem] text-black">$ 50</h6>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[var(--muted-low-white)] uppercase text-[0.94rem]">VAT (INCLUDED)</span>
                            <h6 className="font-bold text-[1.13rem] text-black">$ 1,079</h6>
                        </div>
                        <div className="flex justify-between items-center mt-[1.5rem]">
                            <span className="text-[var(--muted-low-white)] uppercase text-[0.94rem]">GRAND TOTAL</span>
                            <h6 className="font-bold text-[1.13rem] text-[var(--primary)]">$ 5,446</h6>
                        </div>
                    </div>

                    <div onClick={() => setShowOrderModal(true)}>
                        <CustomButton text="continue & pay" variant="primary-btn" className="w-full" />
                    </div>
                </div>
            </div>

            {/* Order Confirmation Modal */}
            {showOrderModal && (
                <div
                    className="fixed inset-0 bg-black/40 z-50 p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
                    onClick={() => setShowOrderModal(false)}
                >
                    <div
                        className="bg-white rounded-[0.5rem] p-[1.5rem] sm:p-[2.5rem] md:p-[3rem] w-full max-w-[33.75rem] z-50 shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src="/tick.svg"
                            alt="Order Confirmed"
                            width={64}
                            height={64}
                            className="mb-[1.5rem] md:mb-[2rem]"
                        />
                        <h3 className="uppercase font-bold tracking-[var(--letter-spacing2)] leading-tight mb-[1rem] md:mb-[1.5rem] text-[1.5rem] md:text-[2rem]">
                            THANK YOU<br />FOR YOUR ORDER
                        </h3>
                        <p className="text-[var(--muted-low-white)] text-[0.94rem] leading-[1.56] mb-[1.5rem] md:mb-[2rem]">
                            You will receive an email confirmation shortly.
                        </p>

                        {/* Order Items & Grand Total Box */}
                        <div className="rounded-[0.5rem] overflow-hidden flex flex-col sm:flex-row mb-[1.5rem] md:mb-[2.88rem]">
                            {/* Items preview */}
                            <div className="flex-1 bg-[#F1F1F1] p-[1.25rem] sm:p-[1.5rem]">
                                {cartItems.length > 0 && (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[1rem]">
                                            <Image
                                                src={cartItems[0].image}
                                                alt={cartItems[0].name}
                                                width={50}
                                                height={50}
                                                className="rounded-[0.5rem] shrink-0"
                                            />
                                            <div>
                                                <p className="font-bold text-[0.94rem] leading-tight text-black">{cartItems[0].name}</p>
                                                <p className="font-bold text-[0.88rem] uppercase text-[var(--muted-low-white)] mt-[0.25rem]">
                                                    $ {cartItems[0].price.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="font-bold text-[0.94rem] text-[var(--muted-low-white)]">
                                            x{cartItems[0].quantity}
                                        </span>
                                    </div>
                                )}
                                {cartItems.length > 1 && (
                                    <>
                                        <div className="h-[0.06rem] bg-black/10 my-[0.75rem]" />
                                        <p className="font-bold text-[0.75rem] text-[var(--muted-low-white)] text-center">
                                            and {cartItems.length - 1} other item(s)
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Grand Total */}
                            <div className="bg-black text-white p-[1.25rem] sm:p-[1.5rem] flex flex-col justify-center sm:min-w-[12rem]">
                                <p className="text-[var(--muted-low-white)] uppercase text-[0.94rem] mb-[0.5rem]">GRAND TOTAL</p>
                                <h6 className="font-bold text-[1.13rem] text-white">$ 5,446</h6>
                            </div>
                        </div>

                        <Link href="/" onClick={() => setShowOrderModal(false)}>
                            <CustomButton text="back to home" variant="primary-btn" className="w-full" />
                        </Link>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Checkout