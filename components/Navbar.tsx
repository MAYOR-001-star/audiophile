"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { navlinks } from "@/mockupData/data"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
            onClick={() => setMenuOpen((prev) => !prev)}
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
        <Link href="/cart" className="relative z-20">
          <Image
            src="/icons/cart.svg"
            alt="cart"
            width={23.33}
            height={20}
            className="nav-icon"
          />
        </Link>
      </div>
    </header>
  )
}

export default Navbar