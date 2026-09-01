import React from 'react'
import { CustomInputProps } from './types'

const CustomInput = ({ label, type, name, value, onChange, placeholder, className, error="Wrong format" }: CustomInputProps) => {
    return (
        <div>
            <div className="flex w-full justify-between mb-[0.56rem]">
                <label className={`label ${error ? "text-[var(--danger)]" : "text-[var(--black)]"}`}>{label}</label>
                <p className='error'>{error}</p>
            </div>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />
        </div>
    )
}

export default CustomInput