"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { navlinks } from "@/mockupData/data"
import Cart from "@/app/cart/page"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [cartOpen, setCartOpen] = useState<boolean>(false)

  useEffect(() => {
    if (menuOpen || cartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen, cartOpen])

  return (
    <header className={`navbar-container ${menuOpen ? "h-screen lg:h-auto" : "h-auto"}`}>
      <div className="navbar-inner">

        {/* Menu */}
        <div className="relative z-20 flex items-center lg:hidden">
          <Image
            src="/icons/menu.svg"
            alt="menu"
            width={16}
            height={15}
            className="nav-icon cursor-pointer"
            onClick={() => {
              setMenuOpen((prev) => !prev)
              setCartOpen(false)
            }}
          />
        </div>

        {/* Logo */}
        <Link href="/" className="relative z-20">
          <Image
            src="/audiophile.svg"
            alt="Audiophile"
            width={143}
            height={25}
          />
        </Link>

        {/* Navigation */}
        <ul className={`navbar-links ${menuOpen ? "flex" : "hidden lg:flex"}`}>
          {navlinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart */}
        <div 
          onClick={() => {
            setCartOpen((prev) => !prev)
            setMenuOpen(false)
          }} 
          className="relative z-20"
        >
          <Image
            src="/icons/cart.svg"
            alt="cart"
            width={23.33}
            height={20}
            className="nav-icon"
          />
        </div>
      </div>
      {cartOpen && <Cart cartOpen={cartOpen}  setCartOpen={setCartOpen} />}
    </header>
  )
}

export default Navbar