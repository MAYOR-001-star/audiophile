import React from 'react'
import { ButtonProps } from './types'
import Image from 'next/image'

const CustomButton = ({ text, variant, buttonType }: ButtonProps) => {
    return (
        buttonType === "shop" ? (
            <button className="shop-btn flex items-center gap-[0.83rem]">
                {text}
                <Image src="/chevron-right.svg" alt="arrow" width={5} height={10} />
            </button>
        ) : (
            <button className={variant}>
                {text}
            </button>
        )
    )
}

export default CustomButton