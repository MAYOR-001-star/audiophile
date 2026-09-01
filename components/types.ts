export type ButtonProps = {
    text: string,
    buttonType?: "shop",
    variant: "primary-btn" | "black-btn" | "shop-btn";
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
}