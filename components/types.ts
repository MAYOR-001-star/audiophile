export type ButtonProps = {
    text: string,
    buttonType?: "shop",
    variant: "primary-btn" | "black-btn" | "shop-btn";
    className?: string;
    href?: string;
}

export type CustomInputProps = {
    label: string;
    type: string;
    name: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: string;
    required?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
}

export type QuantitySelectorProps = {
    quantity?: number;
    onQuantityChange?: (quantity: number) => void;
    min?: number;
    max?: number;
    className?: string;
}
