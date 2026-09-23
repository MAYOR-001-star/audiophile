import CategoryCards from '@/components/CategoryCards'
import CustomButton from '@/components/CustomButton'
import { categoriesData } from '@/mockupData/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { notFound } from 'next/navigation'

interface CategoryDetailPageProps {
    params: Promise<{ id: string }>
}

const CategoryDetailPage = async ({ params }: CategoryDetailPageProps) => {
    const { id } = await params
    const categoryData = categoriesData.find(
        (item) => item.id === id
    );

    if (!categoryData) {
        notFound();
    }
    return (
        <div>
            <section className='category-header'>
                <h2 className='category-header-title'>{id}</h2>
            </section>
            <section className="category-products-section">
                {categoryData.products.map((product) => (
                    <div
                        key={product.id}
                        className={`category-product-item ${product.imageSide === "right" ? "category-product-reverse" : ""}`}
                    >
                        {/* Product Image */}
                        <div className="category-product-image-wrapper">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="category-product-image"
                            />
                        </div>

                        {/* Product Content */}
                        <div className="category-product-content">
                            <p className="category-product-badge">
                                {product.badge}
                            </p>

                            <h2 className="category-product-name">
                                {product.name}
                            </h2>

                            <p className="category-product-description">
                                {product.description}
                            </p>
                            <Link href={product.cta.href}>
                                <CustomButton
                                    text={product.cta.label}
                                    variant="primary-btn"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
            <div className="category-cards-wrapper">
                <CategoryCards />
            </div>
        </div>
    )
}

export default CategoryDetailPage
