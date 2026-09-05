import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <p className='overline text-[var(--muted-low-white)] uppercase'>new product</p>
                <h1 className='hero-title'>XX99 Mark II Headphones</h1>
                <p className='hero-text'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <CustomButton text='see product' variant='primary-btn' />
            </div>
            <div className='hero-image-wrapper'>
                <Image src='/hero-img.svg' alt='hero-img' fill className='object-cover' />
            </div>
        </section>
    )
}

export default Hero