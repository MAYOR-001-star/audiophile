'use client'

import React, { useState } from 'react'
import { QuantitySelectorProps } from './types'

const QuantitySelector = ({
  quantity,
  onQuantityChange,
  min = 1,
  max,
  className = '',
}: QuantitySelectorProps) => {
  const [internalQuantity, setInternalQuantity] = useState(min)

  const isControlled = quantity !== undefined
  const currentQuantity = isControlled ? quantity : internalQuantity

  const handleDecrement = () => {
    if (currentQuantity > min) {
      const nextQuantity = currentQuantity - 1
      if (!isControlled) {
        setInternalQuantity(nextQuantity)
      }
      onQuantityChange?.(nextQuantity)
    }
  }

  const handleIncrement = () => {
    if (max === undefined || currentQuantity < max) {
      const nextQuantity = currentQuantity + 1
      if (!isControlled) {
        setInternalQuantity(nextQuantity)
      }
      onQuantityChange?.(nextQuantity)
    }
  }

  return (
    <div className={`product-quantity-selector ${className}`.trim()}>
      <button
        type="button"
        onClick={handleDecrement}
        className="product-quantity-btn"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <p className="product-quantity-value">{currentQuantity}</p>
      <button
        type="button"
        onClick={handleIncrement}
        className="product-quantity-btn"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
