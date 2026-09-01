import React from 'react'

interface CategoryDetailPageProps {
    params: Promise<{ id: string }>
}

const CategoryDetailPage = async ({ params }: CategoryDetailPageProps) => {
    const { id } = await params
    return (
        <div>Category: {id}</div>
    )
}

export default CategoryDetailPage
