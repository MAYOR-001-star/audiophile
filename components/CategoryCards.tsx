import React from 'react'
import Image from 'next/image'
import { miniProducts } from '@/mockupData/data'
import CustomButton from './CustomButton'

const CategoryCards = () => {
    return (
        <div className='showcase-categories'>
            {miniProducts.map((item) => {
                return (
                    <div key={item.name} className='category-card'>
                        <div className={`relative ${item.name === "Earphones" ? "w-[10.81rem]" : "w-[7.69rem]"} h-[10rem] mx-auto bottom-[2.25rem]`}>
                            <Image src={item.image} alt={item.name} fill className='object-cover lg:object-contain rounded-[0.50em]' />
                        </div>
                        <Image src="/shadow.svg" alt="shadow" height={18} width={122} className='mx-auto mt-[-4rem]' />
                        <div className='text-center'>
                            <h6 className='mb-[0.94rem] uppercase'>{item.name}</h6>
                            <CustomButton text="shop" buttonType="shop" variant="shop-btn" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryCards
