import React from 'react'
import { ButtonProps } from './types'
import Image from 'next/image'

const CustomButton = ({ text, variant, buttonType }: ButtonProps) => {
    return (
        buttonType === "shop" ? (
            <button className="shop-btn block w-full">
                <span className='text-center text-[var(--muted-low-white)] hover:text-[var(--muted-primary)]'>{text}</span>
                <Image src="/icons/chevron-right.svg" alt="arrow" width={5} height={10} />
            </button>
        ) : (
            <button className={variant}>
                <span>{text}</span>
            </button>
        )
    )
}

export default CustomButton