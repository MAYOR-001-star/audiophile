export type miniProductsProps = {
    name: string;
    image: string;
    href: string;
}

export type ProductProps = {
    id: string;
    name: string;
    badge: string | null;
    description: string;
    image: string;
    imageSide: "left" | "right";
    cta: {
        label: string;
        href: string;
    };
};

export type CategoryProps = {
    id: string;
    title: string;
    products: ProductProps[];
};

type ImagesProps = {
    main: string;
    gallery: string[];
};

type InTheBoxProps = {
    quantity: number;
    item: string;
};

type RelatedProductsProps = {
    id: string;
    name: string;
    image: string;
    href: string;
};

export type ProductDetailsProps = {
    id: string;
    category: string;
    name: string;
    badge: string | null;
    price: number;
    description: string;
    images: ImagesProps;
    features: string[];
    inTheBox: InTheBoxProps[];
    relatedProducts: RelatedProductsProps[];
};