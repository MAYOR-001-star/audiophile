import Link from 'next/link'
import React from 'react'
import { productsData } from '@/mockupData/data';
import { ProductDetailsProps } from '@/mockupData/types';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import CategoryCards from '@/components/CategoryCards';

type ParamsProps = {
  params: Promise<{ id: string }>
}

const productPage = async ({ params }: ParamsProps) => {
  const { id } = await params

  const productData: ProductDetailsProps | undefined = productsData.find(
    (item) => item.id === id
  );

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <section className='mt-[12rem] px-[1.5em] md:px-[2.41em] lg:px-[10.31em]'>
        <div>
          <Link href={`/category/${productData.category}`} className='mt-[4rem]'>
            <p className='text-[var(--muted-low-white)] hover:text-[var(--primary)] transition-colors'>Go Back</p>
          </Link>
          <div className='flex flex-col md:flex-row items-center justify-between gap-[2.5rem] md:gap-[4.31rem] lg:gap-[7.78rem] mt-[3.5rem]'>
            <div className="size-[20.44rem] md:w-[17.56rem] lg:w-[33.75rem] md:h-[30rem] lg:h-[35rem] relative">
              <Image
                src={productData.images.main}
                alt={productData.name}
                fill
                className="object-cover lg:object-contain"
              />
            </div>

            {/* Product Content */}
            <div className="md:max-w-[21.22rem] lg:max-w-[27.88rem]">
              {productData.badge && (
                <p className="overline text-[var(--primary)]">
                  {productData.badge}
                </p>
              )}

              <h2 className="mt-[1rem] text-[2.5rem]">
                {productData.name}
              </h2>

              <p className="my-[2rem] text-[var(--muted-low-white)]">
                {productData.description}
              </p>
              <h6 className="">{`$${productData.price}`}</h6>
              <div className="mt-[2.94rem] flex justify-start items-center gap-[1rem]">
                <div className='bg-[var(--muted-high-white)] px-[0.97em] py-[0.94em] flex justify-center items-center gap-[1.28rem]'>
                  <button className='subtitle text-[var(--muted-low-white)] hover:text-[var(--primary)] cursor-pointer'>-</button>
                  <p className='font-bold'>1</p>
                  <button className='subtitle text-[var(--muted-low-white)] hover:text-[var(--primary)] cursor-pointer'>+</button>
                </div>
                <CustomButton
                  text="ADD TO CART"
                  variant="primary-btn"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='mt-[10rem] flex justify-center items-start gap-[7.81rem]'> */}
        <div className='mt-[10rem] flex flex-col lg:flex-row justify-between items-start gap-[5.5rem] md:gap-[7.5rem] lg:gap-0'>
          <div className='max-w-[39.69rem]'>
            <h3 className='uppercase'>Features</h3>
            {productData.features.map((feature, index) => (
              <p key={index} className='text-[var(--muted-low-white)] mt-[2rem]'>{feature}</p>
            ))}
          </div>
          <div className='flex flex-col md:flex-row lg:flex-col justify-between items-start w-auto md:w-full lg:w-auto'>
            <h3 className='uppercase'>in the box</h3>
            <div className='mt-[1.5rem] md:mt-0 lg:mt-[2rem]'>
              {productData.inTheBox.map((item, index) => (
                <div key={index} className='mt-[0.5rem] flex justify-start items-center gap-[1.5rem]'>
                  <span className='text-[var(--primary)] font-bold'>{item.quantity}X</span>
                  <p className='text-[var(--muted-low-white)] font-medium'>{item.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='my-[10rem]'>
          <h3 className='uppercase mb-[4rem] text-center'>you may also like</h3>
          {/* <div className='flex justify-center items-center gap-[1.88rem]'> */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-[3.5rem] md:gap-[0.69rem] lg:gap-0'>
            {productData.relatedProducts.map((item) => {
              return (
                <div key={item.id}>
                  <div className="w-[20.44rem] md:w-[13.94rem] lg:w-[28.88rem] h-[17.5rem] md:h-[19.88rem] lg:h-[19.88rem] relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover lg:object-contain"
                    />
                  </div>
                  <div className='flex flex-col items-center'>
                    <h5 className='mt-[2.5rem] mb-[2rem]'>{item.name}</h5>
                    <Link href={`/product/${item.id}`}>
                      <CustomButton text="SEE PRODUCT" variant="primary-btn" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <div className="category-cards-wrapper">
        <CategoryCards />
      </div>
    </>
  )
}

export default productPage