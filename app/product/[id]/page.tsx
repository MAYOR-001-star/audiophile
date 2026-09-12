import Link from 'next/link'
import React from 'react'
import { productsData } from '@/mockupData/data';
import { ProductDetailsProps } from '@/mockupData/types';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import CategoryCards from '@/components/CategoryCards';
import QuantitySelector from '@/components/QuantitySelector';

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
      <section className='product-detail-section'>
        <div>
          <Link href={`/category/${productData.category}`} className='product-back-link'>
            <p className='product-back-link-text'>Go Back</p>
          </Link>
          <div className='product-hero'>
            <div className="product-hero-image-wrapper">
              <Image
                src={productData.images.main}
                alt={productData.name}
                fill
                className="product-hero-image"
              />
            </div>

            {/* Product Content */}
            <div className="product-hero-content">
              {productData.badge && (
                <p className="product-badge">
                  {productData.badge}
                </p>
              )}

              <h2 className="product-title">
                {productData.name}
              </h2>

              <p className="product-description">
                {productData.description}
              </p>
              <h6 className="product-price">{`$${productData.price}`}</h6>
              <div className="product-actions">
                <QuantitySelector />
                <CustomButton
                  text="ADD TO CART"
                  variant="primary-btn"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='product-info-section'>
          <div className='product-features'>
            <h3 className='product-features-title'>Features</h3>
            {productData.features.map((feature, index) => (
              <p key={index} className='product-feature-text'>{feature}</p>
            ))}
          </div>
          <div className='product-in-box'>
            <h3 className='product-in-box-title'>in the box</h3>
            <div className='product-in-box-list'>
              {productData.inTheBox.map((item, index) => (
                <div key={index} className='product-in-box-item'>
                  <span className='product-in-box-qty'>{item.quantity}X</span>
                  <p className='product-in-box-name'>{item.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className='product-gallery'>
          <div className='product-gallery-column'>
            <div className='product-gallery-small-wrapper'>
              <Image
                src={productData.images.gallery[0]}
                alt={productData.name}
                fill
                className="product-gallery-small-image"
              />
            </div>
            <div className='product-gallery-small-wrapper'>
              <Image
                src={productData.images.gallery[1]}
                alt={productData.name}
                fill
                className="product-gallery-small-image"
              />
            </div>
          </div>
          <div className='product-gallery-large-wrapper'>
            <Image
              src={productData.images.gallery[2]}
              alt={productData.name}
              fill
              className="product-gallery-large-image"
            />
          </div>
        </section>
        <div className='product-related-section'>
          <h3 className='product-related-title'>you may also like</h3>
          <div className='product-related-grid'>
            {productData.relatedProducts.map((item) => {
              return (
                <div key={item.id}>
                  <div className="product-related-image-wrapper">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="product-related-image"
                    />
                  </div>
                  <div className='product-related-content'>
                    <h5 className='product-related-name'>{item.name}</h5>
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