import { miniProductsProps } from "./types"

export const navlinks = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/category/headphones" },
    { name: "Speakers", href: "/category/speakers" },
    { name: "Earphones", href: "/category/earphones" }
]

export const socials = [
    { name: "facebook", src: "/socials/facebook.svg" },
    { name: "instagram", src: "/socials/instagram.svg" },
    { name: "twitter", src: "/socials/twitter.svg" }
]


export const miniProducts: miniProductsProps[] = [
    {
        "name": "Headphones",
        "image": "/miniproducts/headphones.svg",
        "href": "/headphones"
    },
    {
        "name": "Speakers",
        "image": "/miniproducts/speakers.svg",
        "href": "/speakers"
    },
    {
        "name": "Earphones",
        "image": "/miniproducts/earphones.svg",
        "href": "/earphones"
    }
]

export const categoriesData = [
    {
        id: "earphones",
        title: "EARPHONES",
        products: [
            {
                id: "yx1-wireless",
                name: "YX1 WIRELESS EARPHONES",
                badge: "NEW PRODUCT",
                description:
                    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in environments where external noise acts as a distraction.",
                image: "/category/earphones/yx1-wireless.svg",
                imageSide: "left",
                cta: {
                    label: "SEE PRODUCT",
                    href: "/product/yx1-wireless",
                },
            },
        ],
    },

    {
        id: "speakers",
        title: "SPEAKERS",
        products: [
            {
                id: "zx9",
                name: "ZX9 SPEAKER",
                badge: "NEW PRODUCT",
                description:
                    "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly remarkable depth and clarity.",
                image: "/category/speakers/zx9.svg",
                imageSide: "left",
                cta: {
                    label: "SEE PRODUCT",
                    href: "/product/zx9",
                },
            },
            {
                id: "zx7",
                name: "ZX7 SPEAKER",
                badge: null,
                description:
                    "Stream high quality sound wirelessly with minimal fuss. The ZX7 bookshelf speaker uses high-end audio components that are sure to bring the full spectrum of sound to your home.",
                image: "/category/speakers/zx7.svg",
                imageSide: "right",
                cta: {
                    label: "SEE PRODUCT",
                    href: "/product/zx7",
                },
            },
        ],
    },

    {
        id: "headphones",
        title: "HEADPHONES",
        products: [
            {
                id: "xx99-mark-ii",
                name: "XX99 MARK II HEADPHONES",
                badge: "NEW PRODUCT",
                description:
                    "The new XX99 Mark II headphones are the pinnacle of premium audio technology from our product range. Experience incredible high-fidelity sound and exceptional comfort.",
                image: "/category/headphones/xx99-mark-ii.svg",
                imageSide: "left",
                cta: {
                    label: "SEE PRODUCT",
                    href: "/product/xx99-mark-ii",
                },
            },
            {
                id: "xx99-mark-i",
                name: "XX99 MARK I HEADPHONES",
                badge: null,
                description:
                    "As the gold standard for headphones, the acclaimed XX99 Mark I offers unrivaled performance and superior audio quality.",
                image: "/category/headphones/xx99-mark-i.svg",
                imageSide: "right",
                cta: {
                    label: "SEE PRODUCT",
                    href: "/product/xx99-mark-i",
                },
            },
            {
                id: "xx59",
                name: "XX59 HEADPHONES",
                badge: null,
                description:
                    "Enjoy your audio in style with an enhanced and customized fit for an exceptional listening experience.",
                image: "/category/headphones/xx59.svg",
                imageSide: "left",
                cta: {
                    label: "SEE PRODUCT",
                    href: "/product/xx59",
                },
            },
        ],
    },
] as const;