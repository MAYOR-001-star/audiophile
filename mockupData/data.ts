import { miniProductsProps } from "./types"

export const navlinks = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" }
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