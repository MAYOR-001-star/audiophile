import { miniProducts } from '@/mockupData/data'
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


const ProductsShowcase = () => {
    return (
        <div className='px-[1.5em] md:px-[2.47em] lg:px-[7.31em]'>
            <div className='showcase-categories'>
                {miniProducts.map((item) => {
                    return (
                        <div key={item.name} className='category-card'>
                            <div className={`relative ${item.name==="Earphones"? "w-[10.81rem]" : "w-[7.69rem]"} h-[10rem] mx-auto bottom-[2.25rem]`}>
                                <Image src={item.image} alt={item.name} fill className='object-cover rounded-[0.50em]' />
                            </div>
                            {/* <div className='relative'> */}
                                <Image src="/shadow.svg" alt="shadow" height={18} width={122} className='mx-auto mt-[-4rem]'/>
                            {/* </div> */}
                            <div className='text-center'>
                                <h6 className='mb-[0.94rem] uppercase'>{item.name}</h6>
                                <CustomButton text="shop" buttonType="shop" variant="shop-btn" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <div className='zx9-container'>
                    <div className='zx9-image-wrapper'>
                        <Image
                            src="/speakers/ZX9 speaker.svg"
                            alt="product"
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className='zx9-rings-wrapper'>
                        <Image
                            src="/ring-lights.svg"
                            alt="product"
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className='zx9-content'>
                        <h1 className='zx9-title'>ZX9 SPEAKER</h1>
                        <p className='zx9-text'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <CustomButton text="See Product" variant="black-btn" />
                    </div>
                </div>
                <div className='relative flex flex-col md:flex-row justify-center gap-[1.88rem] md:gap-0 lg:gap-[1.88rem] items-center my-[1.5rem] md:my-[2rem] lg:my-[3rem]'>
                    <div className='absolute z-30 pl-[1.5em] md:pl-[3.88em] lg::pl-[5.94em] py-[6.31em] rounded-[0.5rem] w-full'>
                        <h4 className='mb-[2rem] text-[1.0625rem] lg:text-[1.75rem]'>YX1 EARPHONES</h4>
                        <CustomButton text="See Product" variant="black-btn" />
                    </div>
                    <div className='relative w-full h-[20rem]'>
                        <Image
                            src="/speakers/ZX7 speaker.svg"
                            alt="product"
                            fill
                            className='object-cover rounded-[0.50em]'
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-[1.88rem] md:gap-0 lg:gap-[1.88rem] items-center'>
                    <div className='relative w-full h-[12.5rem] md:h-[18rem] md:w-[50%] lg:h-[20rem]'>
                        <Image
                            src="/earphones/YX1 earphones.svg"
                            alt="product"
                            fill
                            className='object-cover rounded-[0.50em]'
                        />
                    </div>
                    <div className='pl-[1.5em] md:pl-[2.5em] lg::pl-[5.94em] py-[2.56em] md:py-[6.31em] bg-[#f1f1f1] rounded-[0.5rem] w-full md:w-[50%]'>
                        <h4 className='mb-[2rem] text-[1.75rem]'>YX1 EARPHONES</h4>
                        {/* <h4 className='mb-[2rem] text-[1.0625rem] lg:text-[1.75rem]'>YX1 EARPHONES</h4> */}
                        <CustomButton text="See Product" variant="black-btn" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsShowcase
