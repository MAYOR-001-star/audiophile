import React from 'react'
import { CustomInputProps } from './types'

const CustomInput = ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    className,
    error,
    required,
    checked,
    defaultChecked,
}: CustomInputProps) => {
    // 🔘 Radio Input Variant
    if (type === 'radio') {
        const inputProps = onChange
            ? { checked, onChange }
            : { defaultChecked: checked ?? defaultChecked }

        return (
            <label
                className={`w-full flex items-center gap-[1rem] py-[1.16em] px-[1.5em] my-[0.56rem] border-[0.06rem] rounded-[0.5rem] cursor-pointer transition-colors font-bold text-[0.88rem] tracking-[-0.25px] border-[var(--muted-low-white)] has-[:checked]:border-[var(--primary)] hover:border-[var(--primary)] ${className || ''}`}
            >
                <div className="relative flex items-center justify-center">
                    <input
                        type="radio"
                        name={name}
                        value={value}
                        {...inputProps}
                        required={required}
                        className="peer sr-only"
                    />
                    {/* Outer circle */}
                    <div className="w-[1.25rem] h-[1.25rem] rounded-full border border-[var(--muted-low-white)] flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--primary)] after:content-[''] after:w-[0.625rem] after:h-[0.625rem] after:rounded-full after:bg-[var(--primary)] after:scale-0 peer-checked:after:scale-100 transition-all" />
                </div>
                <span className="text-[var(--black)] select-none">{label}</span>
            </label>
        )
    }

    // 📝 Default Text / Number / Email Input
    return (
        <div className="w-full my-[0.56rem]">
            <div className="flex w-full justify-between">
                <label className={`label ${error ? "text-[var(--danger)]" : "text-[var(--black)]"}`}>
                    {label}
                </label>
                {error && <p className="error">{error}</p>}
            </div>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full py-[1.16em] px-[1.5em] border-[0.06rem] rounded-[0.5rem] border-[var(--muted-low-white)] focus:border-[var(--primary)] focus:outline-none ${className || ''}`}
                required={required}
                checked={checked}
            />
        </div>
    )
}

export default CustomInput
