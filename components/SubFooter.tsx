import Image from 'next/image'
import React from 'react'

const SubFooter = () => {
  return (
    <section className='subfooter-container'>
      <div className='subfooter-image-wrapper'>
        <Image src='/model.svg' alt='model' fill className='object-cover rounded-[0.50em]' />
      </div>
      <div className='subfooter-content'>
        <h2 className='subfooter-title'>
          Bringing you the <span className='text-[var(--primary)]'>best</span> audio gear
        </h2>
        <p className='footer-text'>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  )
}

export default SubFooter