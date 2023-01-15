import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import "./Input.scss";
export interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size" | "prefix"> {
    label?: string;
    required?: boolean;
    size?: "small" | "medium" | "large";
    prefix?: ReactNode;
    suffix?: ReactNode;
    labelClassName?: string;
    inputClassName?: string;
    error?: string;
    errorClassName?: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
